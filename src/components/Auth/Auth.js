import React,{useState} from 'react'
import { Avatar,Button,Paper,Grid,Typography,Container, TextField } from '@material-ui/core'
import useStyles from './styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input'
import Icon from './icon'
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux'
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import {signin,signup} from '../../actions/auth'
const initialst={firstName:'',lastName:'',email:'',password:'',confirmPassword:''}
const Auth = () => {
  const [isSignup,setissignup]=useState(false);
  const handleShowPassword=()=>setshowpass((prev)=>!prev)
  const [showpass,setshowpass]=useState(false)
  const classes=useStyles()
  const navigate=useNavigate();
  const [formdata,setformdata]=useState(initialst)
  const dispatch=useDispatch();
  // const navigate=useNavigate();
  const handleSubmit=(e)=>{
      e.preventDefault();
      // console.log(formdata)
      if(isSignup){
        dispatch(signup(formdata,navigate))
      }else{
        dispatch(signin(formdata,navigate))
      }
  }
  const switchMode=()=>{
    setissignup((prev)=>
      !prev
    )
    setshowpass(false)
  }
  const handleChange=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
  }
  const googleSuccess=async(res)=>{
    console.log(res);
    var decoded = jwt_decode(res.credential);
    console.log(decoded)
    var token=res.credential;
    // const result=res?.profileObj; //optinal chaining
    // const token=res?.tokenId;
    try{
      dispatch({type:'AUTH',data:{token,newUser:{...decoded}}})
      navigate  ("/")
    }catch(err){

      console.log(err)
    }
  }
  const googleFailure=(err)=>{
    console.log(err)
    console.log("Google sign in failed.Try again later")
  }
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography variant='h5'>{isSignup?'Sign Up':'Sign In'}</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>

              <Grid container spacing={2}>
                {
                  isSignup && (
                    <>
                

                      <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>  
                   
                      <Input name="lastName" label="Last Name" handleChange={handleChange} half/>  
                     
                    </>
                  )
                }
                <Input name='email' label='Email address' handleChange={handleChange} type="email"/>
                <Input name='password' label='Password' handleChange={handleChange} type={showpass?"text":"password"} handleShowPassword={handleShowPassword}/>
                {isSignup && <Input name="confirmPassword" label="Repeat password" handleChange={handleChange} type="password" />}
              </Grid>
              <Button type="submit" fullWidth variant="contained" color='primary' className={classes.submit} >
                {isSignup?'Sign Up':'Sign In'}
              </Button>
              <GoogleLogin  
                //    render={(renderProps)=>(
                //   <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick}  startIcon={<Icon/>} variant="contained">Google Sign In</Button>
                // )}
                onSuccess={googleSuccess}
                onError={googleFailure}
                cookiePolicy="single_host_origin"
              />
              <Grid container justifyContent="flex-end">
                <Grid item>
                    <Button onClick={switchMode}>
                      {isSignup?'Already have an account? Sign In':"Don't have an account? Sign Up"}
                    </Button>
                </Grid>
              </Grid>
          </form>
      </Paper>
    </Container>
  )
}
// 226240241671-3u02l0j9asomh53clffu2l4pujnfraol.apps.googleusercontent.com   -cid
// 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 -secret cid
export default Auth