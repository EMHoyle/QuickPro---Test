import { makeStyles } from "@material-ui/core/styles";

const OCStyles = makeStyles((theme) => ({
  root: {
      width: '90%',
      marginLeft: '7rem',
      marginTop: '7rem'
  },
  modal: {
    position: 'absolute',
    width: '400px',
    background: '#ffffff',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: '3rem',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  }
}));

export default OCStyles;
