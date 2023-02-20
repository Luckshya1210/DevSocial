import React,{useState,useEffect} from 'react'
import useStyles from './styles';
import {useDispatch} from 'react-redux'
import FileBase from 'react-file-base64'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TextField,Button,Typography,Paper } from '@material-ui/core';
import { createPost,updatePost } from '../../actions/posts'; 
const Form=({currentId,setcurrentId})=>{
    const classes=useStyles();
    const navigate=useNavigate();
    const dispatch=useDispatch()
    const user=JSON.parse(localStorage.getItem('profile'))
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(currentId){
            dispatch(updatePost(currentId,postData))
        }else{
            dispatch(createPost({...postData,name:user?.newUser?.name},navigate))     
            
        }
        clear()
    }
    const post=useSelector((state)=>currentId?state.posts.posts.find((p)=>p._id===currentId):null)
    console.log(post)
    useEffect(()=>{ 
        if(post){
            setpostData(post)
        }

    },[post])
    const clear=()=>{
        setcurrentId(null)
        setpostData({title:'',message:'',tags:'',selectedFile:''})
    }
    const [postData,setpostData]=useState({
        title:'',message:'',tags:'',selectedFile:''
    })
    if(!user?.newUser?.name){
        return (
            <Paper className={classes.paper}>
                <Typography variant='h6' align='center'>
                    Please sign in to create and like posts!
                </Typography>
            </Paper>
        )
    }
    
    return (
        
        <Paper className={classes.paper} elevation={6} >
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>
                    {currentId?'Updating':'Creating'} a memory   
                </Typography>
                {/* <TextField name='creator' variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e)=>setpostData({...postData,creator:e.target.value})}/> */}
                <TextField name='title' variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e)=>setpostData({...postData,title:e.target.value})}/>
                <TextField name='message' variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e)=>setpostData({...postData,message:e.target.value})}/>
                <TextField name='tags' variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e)=>setpostData({...postData,tags:e.target.value.split(',')})}/>
                <div className={classes.fileInput}>
                    <FileBase
                        type='file'
                        multiple={false}
                        onDone={({base64})=>setpostData({...postData,selectedFile:base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type='submit' fullWidth>Submit</Button>
                <Button color='secondary' size="small" variant="contained" onClick={clear}  fullWidth>Clear</Button>
                
                </form>
        </Paper>
    )
    
}
export default Form