
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
       
    },
  },
  paper: {
    padding: theme.spacing(2),
    borderRadius:'1rem',
    background:  'linear-gradient( 92.7deg,  rgba(245,212,212,1) 8.5%, rgba(252,251,224,1) 90.2% )' 
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    borderRadius:'1rem',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    borderRadius:'1rem',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  btnclr:{
    borderRadius:'1rem',
    background: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
  },
  create:{
    fontFamily:'Rubik',
    fontWeight:500
  },
  fl:{
    fontFamily:'Rubik',
    fontWeight:500,
    borderRadius:'1rem'
  }
}));