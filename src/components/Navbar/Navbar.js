import React,{useState,useEffect} from 'react'
import { AppBar,Avatar,Button,Toolbar,Typography } from '@material-ui/core'
import useStyles from './styles'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import decode from 'jwt-decode'
const Navbar = () => {
    const classes=useStyles()
    const navigate=useNavigate();
    const dispatch=useDispatch()
    const location=useLocation(); 
    const [user,setuser]=useState(JSON.parse(localStorage.getItem('profile')))
    // const user=null;
    useEffect(()=>{
      // const ch=user?.email;
      const tkn=user?.newUser?.token 
      if(tkn){
        const dectkn=decode(tkn)

        if(dectkn.exp*1000<new Date().getTime()){
          logout()
        } 
      }
      //jwt
      setuser(JSON.parse(localStorage.getItem('profile')))
    },[location])
    const logout=()=>{
      dispatch({type:'LOGOUT'});
      window.location.reload()
      setuser(null)

    }
  return (
    <AppBar className={classes.appBar} position="static"  color="inherit">
        <div className={classes.brandContainer} >
          <Typography component={Link} to="/" className={classes.heading} variant='h2' align='center'>DevSocial</Typography>
          {/* <img src={memories} */}
        </div>
        <Toolbar className={classes.toolbar}>
            {user?(
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user?.newUser.name} src={user?.newUser.picture}>{user?.newUser.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user?.newUser.name}</Typography>
                    <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>Logout</Button>
                </div>
            ):(
                <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )
        }
        </Toolbar>
    </AppBar>
  )
}

export default Navbar