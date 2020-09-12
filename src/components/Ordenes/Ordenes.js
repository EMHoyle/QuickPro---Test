import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import {Modal, TextField, Button} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import axios from 'axios';
import OCStyles from "./OCStyles";


const colums = [
  {
    title: "Codigo",
    field: "Codigo"
  },
  {
    title: "Nombre",
    field: "Nombre"
  },
  {
    title: "Estado",
    field: "CodigoEstado",
    type: "numeric"
  }
]

const baseURL = 'http://localhost:3001/fakemercadopublico'

const Ordenes = () => {

  const classes = OCStyles();

  const [data, setData] = useState([]);

  const apiGet = async () => {
    await axios.get(baseURL)
      .then(response => {
        setData(response.data)
      })
  };

  useEffect( () => {
    apiGet();
  },[]);

  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <div className= {classes.root}>
      <div>
        <Button 
          className={classes.button} 
          variant='outlined'
          startIcon={<AddShoppingCartIcon/>}
        >
          Insertar Nueva Orden
        </Button>
      </div>
      <MaterialTable
        columns = {colums}
        alignColums = 'center'
        title = "Órdenes de Compra"
        data = {data}
        onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
        actions ={[
          {
            icon: 'add',
            tooltip: 'Ver Orden Completa',
            onClick: (event, rowData)=>alert('Orden Completa')
          },
          {
            icon: 'edit',
            tooltip: 'Editar Orden',
            onClick: (event, rowData)=>alert('Has editado la orden de compra')
          },
          {
            icon: 'delete',
            tooltip: 'Eliminar Orden',
            onClick: (event, rowData)=>window.confirm('Estás seguro que deseas eliminar la orden: '+rowData.Codigo+'?')
          }
        ]}
        options={{
        rowStyle: rowData => ({
          backgroundColor: (selectedRow === rowData.tableData.id) ? 'rgba(0, 117, 246, 0.1)' : '#FFF'
        }),
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF'
        },
        actionsColumnIndex: -1,
        exportButton: true
      }}
      />
    </div> 
  );
};

export default Ordenes;
