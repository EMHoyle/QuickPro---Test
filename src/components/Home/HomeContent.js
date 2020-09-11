import React from 'react';
import Typography from '@material-ui/core/Typography';
import HStyles from './HStyles';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          www.quickorders.cl
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const HomeContent = () => {
  const classes = HStyles();

  return (
    <>
        <Typography  className={classes.typo} paragraph>
        QuickPro es una aplicación basada en React + Material UI con el fin de entregar a usted la posibilidad de hacer un seguimiento completo de sus ódenes de compra y manejar la trazabilidad de las mismas de manera eficiente y cómoda. Su DataBase se alimenta directamente de la API creada para usted; así el mantenimiento se hace directamente a la API desde nuestra base de operaciones según el requerimiento que tenga a la hora de establecer sus prioridades.
        </Typography>
        <Typography  className={classes.typo} paragraph>
        La interfaz minimalista permite que le sea de fácil acceso las opciones que usted requiera para su control. Además cuenta con la capacidad de ver las métricas necesarias para tener una vista rápida y segura de su empresa.
        </Typography>
        <Typography  className={classes.typo} paragraph>
        QuickPro cuenta también con un sistema de login para permitir el acceso sólo a aquellos que usted requiera darle.
        </Typography>
        <Typography  className={classes.typo2} paragraph>
            <span style={{ fontWeight: 'bold', fontSize: '2rem', marginTop: '2rem'}} >Ventajas</span>
                    <li>Empleo de nuevas tecnologías</li>
                    <li>Diseño minimalista</li>
                    <li>Seguro y Confiable</li>
                    <li>Fácil de usar</li>
                    <li>Adaptable</li>
        </Typography>
        <div className={classes.logo}>
            <BlurOnIcon style={{ fontSize: '10rem', color: '#0075f6', marginLeft: '45px'}} />
            <p style={{ fontSize: '1.8rem', color: '#0075f6'}}>QuickOrders by Akko</p>
        </div>
        <Box className={classes.footer}>
          <Copyright />
         </Box>
    </>
    );
}

export default HomeContent;