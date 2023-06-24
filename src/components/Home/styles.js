import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: '1rem',
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
    background:  'linear-gradient( 92.7deg,  rgba(245,212,212,1) 8.5%, rgba(252,251,224,1) 90.2% )' 
  },
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
    background:  'linear-gradient( 92.7deg,  rgba(245,212,212,1) 8.5%, rgba(252,251,224,1) 90.2% )' ,
    borderRadius: '1rem',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  searchButton:{
    borderRadius:'1rem',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  srch:{
    fontFamily:'Rubik',
    borderRadius:'1rem'
  }
}));