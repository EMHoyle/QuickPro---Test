import React, { useEffect, useState } from 'react';
import { TextField, Button, Modal } from "@material-ui/core";
import axios from "axios";
import MStyles from './MStyles'

const baseURL = "http://localhost:3001/fakemercadopublico";

const ModalGet = () => {
    const classes = MStyles();

  const [data, setData] = useState([]);
  const [modalGet, setModalGet] = useState(false)
  
  const apiGet = async () => {
    await axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  };

  const actionModalGet = () => {
    setModalGet(!modalGet);
  };

  const bodyModalGet = (
    <div className={classes.modal}>
      <h3>Agregar Nueva Orden</h3>
      <TextField
        className={classes.inputMaterial}
        label="Codigo"
        name="Codigo"
        //onChange={handleChange}
      />
      <br />
      <TextField
        className={classes.inputMaterial}
        label="Nombre"
        name="Nombre"
        //onChange={handleChange}
      />
      <br />
      <TextField
        className={classes.inputMaterial}
        label="Estado"
        name="CodigoEstado"
        type= "numeric"
        //onChange={handleChange}
      />
      <br />
      <div align="right">
        <Button color="primary">
          Agregar
        </Button>
        <Button onClick={() => actionModalGet()}>Cancelar</Button>
      </div>
    </div>
  );

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div>
      <Modal open={modalGet} onClose={actionModalGet}>
        {bodyModalGet}
      </Modal>
    </div>
  );
};

export default ModalGet
