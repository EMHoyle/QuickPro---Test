import { makeStyles } from "@material-ui/core/styles";

const MStyles = makeStyles((theme) => ({
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

export default MStyles;

