import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { TextField, Button, Modal } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import axios from "axios";
import OCStyles from "./OCStyles";

const colums = [
  {
    title: "Codigo",
    field: "Codigo",
  },
  {
    title: "Nombre",
    field: "Nombre",
  },
  {
    title: "Estado",
    field: "CodigoEstado",
    type: "numeric",
  },
];

const baseURL = "http://localhost:3001/fakemercadopublico";

const Ordenes = () => {
  //Styles
  const classes = OCStyles();

  //States
  const [data, setData] = useState([]);
  const [modalGet, setModalGet] = useState(false);
  const [modalPut, setModalPut] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [ordenSeleccionada, setOrdenSeleccionada] = useState({
    Codigo: "",
    Nombre: "",
    CodigoEstado: "",
    id: "",
  });

  //Methods
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrdenSeleccionada((prevstate) => ({
      ...prevstate,
      [name]: value,
    }));
    console.log(ordenSeleccionada);
  };

  const editOrden =  (orden, caso) => {
    setOrdenSeleccionada(orden);
    (caso==='Editar')?actionModalPut()
    :
    actionModalDelete()
  } 

  // GET
  const actionModalGet = () => {
    setModalGet(!modalGet);
  };

  const apiGet = async () => {
    await axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  };

  const bodyModalGet = (
    <div className={classes.modal}>
      <h3>Agregar Nueva Orden</h3>
      <TextField
        className={classes.inputMaterial}
        label="Codigo"
        name="Codigo"
        onChange={handleChange}
      />
      <br />
      <TextField
        className={classes.inputMaterial}
        label="Nombre"
        name="Nombre"
        onChange={handleChange}
      />
      <br />
      <TextField
        className={classes.inputMaterial}
        label="Estado"
        name="CodigoEstado"
        type="numeric"
        onChange={handleChange}
      />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => apiPost()}>Agregar</Button>
        <Button onClick={() => actionModalGet()}>Cancelar</Button>
      </div>
    </div>
  );

  useEffect(() => {
    apiGet();
  }, []);

  //POST
  const apiPost = async () => {
    await axios
      .post(baseURL, ordenSeleccionada)
      .then((response) => {
        setData(data.concat(response.data));
        actionModalGet();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //PUT
  const actionModalPut = () => {
    setModalPut(!modalPut);
  };

  const apiPut = async () => {
    await axios
      .put(baseURL + "/" + ordenSeleccionada.id, ordenSeleccionada)
      .then((response) => {
        var dataNueva = data;
        dataNueva.map((orden) => {
          if (orden.id === ordenSeleccionada.id) {
            orden.Codigo = ordenSeleccionada.Codigo;
            orden.Nombre = ordenSeleccionada.Nombre;
            orden.CodigoEstado = ordenSeleccionada.CodigoEstado;
          }
        });
        setData(dataNueva);
        actionModalPut();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const bodyModalPut = (
    <div className={classes.modal}>
      <h3>Editar Orden</h3>
      <TextField
        className={classes.inputMaterial}
        label="Codigo"
        name="Codigo"
        onChange={handleChange}
        value={ordenSeleccionada&&ordenSeleccionada.Codigo}
      />
      <br />
      <TextField
        className={classes.inputMaterial}
        label="Nombre"
        name="Nombre"
        onChange={handleChange}
        value={ordenSeleccionada&&ordenSeleccionada.Nombre}
      />
      <br />
      <TextField
        className={classes.inputMaterial}
        label="Estado"
        name="CodigoEstado"
        type="numeric"
        onChange={handleChange}
        value={ordenSeleccionada&&ordenSeleccionada.CodigoEstado}
      />
      <br />
      <div align="right">
        <Button color="primary" onClick={()=>apiPut()}>Editar</Button>
        <Button onClick={() => actionModalPut()}>Cancelar</Button>
      </div>
    </div>
  );

  //DELETE
  const actionModalDelete = () => {
    setModalDelete(!modalDelete);
  };

   const apiDelete = async () => {
     await axios
       .delete(baseURL + "/" + ordenSeleccionada.id)
       .then((response) => {
         setData(
           data.filter((orden) => orden.id !== ordenSeleccionada.id)
         );
         actionModalDelete();
       })
       .catch((error) => {
         console.log(error);
       });
   };

   const bodyModalDelete=(
    <div className={classes.modal}>
      <p>Estás seguro que deseas eliminar esta Orden <b>{ordenSeleccionada && ordenSeleccionada.artista}</b>? </p>
      <div align="right">
        <Button color="secondary" onClick={()=>apiDelete()}>Sí</Button>
        <Button onClick={()=>actionModalDelete()}>No</Button>
      </div>
    </div>
  )

  return (
    <div className={classes.root}>
      <div>
        <Button
          className={classes.button}
          variant="outlined"
          startIcon={<AddShoppingCartIcon />}
          onClick={() => actionModalGet()}
        >
          Insertar Nueva Orden
        </Button>
      </div>
      <MaterialTable
        columns={colums}
        alignColums="center"
        title="Órdenes de Compra"
        data={data}
        onRowClick={(evt, selectedRow) =>
          setSelectedRow(selectedRow.tableData.id)
        }
        actions={[
          {
            icon: "add",
            tooltip: "Ver Orden Completa",
            onClick: (event, rowData) => alert("Orden Completa"),
          },
          {
            icon: "edit",
            tooltip: "Editar Orden",
            onClick: (event, rowData) => editOrden(rowData, 'Editar')
          },
          {
            icon: "delete",
            tooltip: "Eliminar Orden",
            onClick: (event, rowData) => editOrden(rowData, 'Eliminar')
          },
        ]}
        options={{
          rowStyle: (rowData) => ({
            backgroundColor:
              selectedRow === rowData.tableData.id
                ? "rgba(0, 117, 246, 0.1)"
                : "#FFF",
          }),
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
          },
          actionsColumnIndex: -1,
          exportButton: true,
        }}
      />

      {/* Modales */}
      <Modal open={modalGet} onClose={actionModalGet}>
        {bodyModalGet}
      </Modal>

      <Modal open={modalPut} onClose={actionModalPut}>
        {bodyModalPut}
      </Modal>

      <Modal open={modalDelete} onClose={actionModalDelete}>
        {bodyModalDelete}
      </Modal>
    </div>
  );
};

export default Ordenes;
