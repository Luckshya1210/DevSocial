import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    background: 'radial-gradient( circle 933.4px at 0.9% -2.6%,  rgba(1,220,215,1) 0%, rgba(171,196,251,1) 47.6%, rgba(224,188,253,1) 72.8%, rgba(255,182,194,1) 100.3% )',
    margin: '30px 0',
    marginTop:'8px',
    display: 'flex',
    flexDirection: 'row',
    width:'100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1px 30px',
  },
  heading: {
    color: 'black',
    textDecoration: 'none',
     fontFamily:'Rubik'
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    fontFamily:'Rubik'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  btn:{
     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
     borderRadius:'1rem',
     fontWeight:'600',
     fontFamily:'Rubik'
  },
}));