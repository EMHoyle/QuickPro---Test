import { makeStyles } from "@material-ui/core/styles";

const OCStyles = makeStyles((theme) => ({
  root: {
      width: '90%',
      marginLeft: '7rem',
      marginTop: '7rem'
  },
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  },
  button:{
    background: 'rgba(0, 117, 246, 0.1)'
  }
}));

export default OCStyles;
