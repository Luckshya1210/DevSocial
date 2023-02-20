import React,{useState,useRef} from 'react'
import { Typography,TextField,Button } from '@material-ui/core'

import { useDispatch } from 'react-redux'
import useStyles from './styles'
import {commentPost} from '../../actions/posts'

const CommentSection=({post})=>{
    const user=JSON.parse(localStorage.getItem('profile'))
    const classes=useStyles()
    const [comments,setcomments]=useState(post?.comments)
    const [comment,setcomment]=useState('')
    const dispatch=useDispatch()
    const commref=useRef()
    const handleclick=async()=>{
        const finalcom=`${user.newUser.name}: ${comment}`
        const newcomm=await dispatch(commentPost(finalcom,post._id))
        setcomments(newcomm);
        setcomment(''); 
        commref.current.scrollIntoView({behavior:'smooth'})
    }
    return (
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography gutterBottom variant='h6'>Comments</Typography>
                    {comments?.map((c,i)=>(
                        <Typography key={i} gutterBottom variant='subtitle1'>
                            <strong>{c.split(': ')[0]}</strong>
                            {c.split(':')[1]}
                        </Typography>
                    ))}
                    <div ref={commref}/>
                </div>
                {user?.newUser?.name && (
                    <div style={{width:'70%'}}>
                        <Typography gutterBottom variant='h6'>Write a comment</Typography>
                        <TextField
                            fullWidth
                            rows={4}
                            variant="outlined"
                            label="Comment"
                            multiline
                            value={comment}
                            onChange={(e)=>setcomment(e.target.value)}
                        />
                        <Button style={{marginTop:'10px'}} fullWidth disabled={!comment} variant="contained" color='primary' onClick={handleclick} >
                            Comment
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )

}
export default CommentSection
