import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    background:  'linear-gradient( 92.7deg,  rgba(245,212,212,1) 8.5%, rgba(252,251,224,1) 90.2% )' ,
    borderRadius:'1rem',
    fontFamily:'Rubik'
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    borderRadius:'1rem',
    fontFamily:'Rubik'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius:'1rem',
    fontFamily:'Rubik',
    background: 'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    
  },
}));