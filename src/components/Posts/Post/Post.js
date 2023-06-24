import React,{useState} from 'react'
import useStyles from './style';
import {Card,CardActions,CardContent,CardMedia,Button,Typography, ButtonBase} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deletePost,likePost } from '../../../actions/posts';
const Post=({post,setcurrentId})=>{
    const classes=useStyles()
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const user=JSON.parse(localStorage.getItem('profile'))
    const [likes,setlikes]=useState(post?.likes)
    const userid=(user?.newUser?.sub|| user?.newUser?._id)
    const hasliked=post.likes.find((like) => like === userid)
    const handlelike=async()=>{
        dispatch(likePost(post._id));

        if(hasliked){
            setlikes(post.likes.filter((id)=>id!=userid));
        }
        else{
            setlikes([...post.likes,userid])
        }

    }
    const Likes = () => {
        if (likes.length > 0) {
          return hasliked
            ? (
              <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
            ) : (
              <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
            );
        }
    
        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
      };
      const openPost=()=>navigate(`/posts/${post._id}`)
    return (
        <Card className={classes.card} raised elevation={6}>
            <ButtonBase
                className={classes.cardAction}
                onClick={openPost}
            >
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant='h6' className={classes.fr}>
                    {post.name}
                </Typography>
                <Typography variant='body2' className={classes.fr}>
                    {moment(post.createdAt).fromNow()}
                </Typography>
            </div>
            {(user?.newUser?.sub===post?.creator || user?.newUser._id===post?.creator) && (
                <div className={classes.overlay2}>
                    <Button style={{color:'black'}} size="small" onClick={()=>setcurrentId(post._id)}>
                        <MoreHorizIcon fontSize="default"/>
                    </Button>
                </div>
            )}
            <div className={classes.details}>
                <Typography variant='body2' color="textSecondary">{post.tags.map((tag)=>`#${tag}`)}</Typography>
            </div>
            <Typography className={classes.title} variant='h5' gutterBottom>{post.title}</Typography>
            <CardContent>
            
            <Typography   variant='body2' color='textSecondary' className={classes.mess} component='p'>{post.message}</Typography>
            </CardContent>
            </ButtonBase>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user?.newUser} onClick={handlelike}>
                    
                    <Likes/>
                </Button>
                {(user?.newUser?.sub===post?.creator || user?.newUser._id===post?.creator) && (

                <Button size="small" color="primary" onClick={()=>dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize='small'/>
                    Delete
                     
                </Button>
                ) }
            </CardActions>
        </Card>
    )
}
export default Post