import axios from 'axios'

const API=axios.create({baseURL:'http://localhost:8800'})
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})
// const url='http://localhost:8800/posts'
export const fetchpost=(id)=>API.get(`/posts/${id}`)
export const fetchposts=(page)=>API.get(`/posts?page=${page}`)
export const createPost=(newPost)=>API.post('/posts',newPost)
export const fetchbysearch=(searchQuery)=>API.get(`posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`)
export const updatePost=(id,updatedPost)=>API.patch(`posts/${id}`,updatedPost)
export const deletePost=(id)=>API.delete(`posts/${id}`)
export const likePost=(id)=>API.patch(`posts/${id}/likePost`)
export const comment=(value,id)=>API.post(`posts/${id}/commentPost`,{value})
export const signin=(formData)=>API.post('/user/signin',formData)
export const signup=(formData)=>API.post('/user/signup',formData)