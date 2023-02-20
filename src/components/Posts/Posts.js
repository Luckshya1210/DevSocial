import React from 'react'
import Post from './Post/Post'
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { CircularProgress ,Grid} from '@material-ui/core';
const Posts=({setcurrentId})=>{
    // const {posts}=useSelector((state)=>state.posts)
    const {posts,isLoading}=useSelector((state)=>state.posts)
    const classes=useStyles();
    console.log(posts)
    if(!posts.length && !isLoading){
        return 'no post'
    }
    return (
        isLoading?<CircularProgress/>:(
            <Grid className={classes.container} container alignItems='stretch' spacing={3}> 
                {posts.map((post)=>(
                    <Grid key={post._id} item xs={12} sm={12} md={6} lg={4}>
                        <Post post={post} setcurrentId={setcurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}
export default Posts