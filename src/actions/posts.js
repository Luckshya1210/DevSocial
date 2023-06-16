import * as api from '../api'

//action creators
export const getPost=(id)=>async (dispatch)=>{
    try{
        dispatch({type:'START_LOADING'})
        const {data}=await api.fetchpost(id);
        // console.log(data);
        dispatch({type:'FETCH_POST',payload:data})
        dispatch({type:'END_LOADING'})
    }
    catch(error){
        console.log(error.message)
    }
    
    // const action={type:'FETCH_ALL',payload:[]}
    // dispatch(action)
}
export const getPosts=(page)=>async (dispatch)=>{
    try{
        dispatch({type:'START_LOADING'})
        const {data:{data,currentPage,numberOfPages}}=await api.fetchposts(page);
        // console.log(data);
        dispatch({type:'FETCH_ALL',payload:{data,currentPage,numberOfPages}})
        dispatch({type:'END_LOADING'})
    }
    catch(error){
        console.log(error.message)
    }
    
    // const action={type:'FETCH_ALL',payload:[]}
    // dispatch(action)
}
export const createPost=(post,navigate)=>async(dispatch)=>{
    try{
        dispatch({type:'START_LOADING'})
        
        const {data}=await api.createPost(post)
        navigate(`/posts/${data._id}`)
        dispatch({type:'CREATE',payload:data})
    }
    catch(error){
        console.log(error)
    }
}
export const commentPost=(value,id)=>async (dispatch)=>{
    try{
        const {data}=await api.comment(value,id)
        console.log(data)   //{comments:['comment']}
        dispatch({type:'COMMENT',payload:data})
        return data.comments
    }catch(err){
        console.log(err)
    }
}
export const getpostbysearch=(searchQuery)=>async(dispatch)=>{
    try{

        dispatch({type:'START_LOADING'})
        const {data:{data}}=await api.fetchbysearch(searchQuery);
        dispatch({type:'FETCH_SEARCH',payload:data})
        dispatch({type:'END_LOADING'})
    }catch(err){
        console.log(err);
    }
}
export const updatePost=(id,post)=>async(dispatch)=>{
    try{
        const {data}=await api.updatePost(id,post)
        dispatch({type:'UPDATE',payload:data})
    }
    catch(error){
        console.log(error.message)
    }
}
export const deletePost=(id)=>async(dispatch)=>{
    try{
        await api.deletePost(id)
        dispatch({type:'DELETE',payload:id});
    }catch(err){
        console.log(err)
    }
}
export const likePost=(id)=>async(dispatch)=>{
    try{
        const {data}=await api.likePost(id)
        dispatch({type:'LIKE',payload:data})
    }
    catch(err){

    }
}