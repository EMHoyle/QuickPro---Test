import { makeStyles } from "@material-ui/core/styles";

const HStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    display: "inline-block",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(10, 10),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  typo: {
    color: "#515070",
    fontSize: "1.5rem",
    textAlign: "justify",
    textJustify: "inter-word",
  },
  typo2: {
    color: "#515070",
    fontSize: "1.5rem",
    textAlign: "justify",
    textJustify: "inter-word",
    marginLeft: '8rem'
  },
  logo: {
      marginTop: '-15rem',
      marginRight: '10rem',
      marginLeft: '50rem',
  },
  footer: {
    marginTop: '5rem',
    marginBottom: '0'
  }
}));

export default HStyles;
