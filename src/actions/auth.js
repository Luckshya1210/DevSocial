import * as api from '../api/index.js'
export const signin=(formdata,navigate)=>async(dispatch)=>{
    try{
        const {data}=await api.signin(formdata)
        dispatch({type:'AUTH',data})
        navigate('/')

    }
    catch(err){
        console.log(err)

    }
}
export const signup=(formdata,navigate)=>async(dispatch)=>{
    try{
        const {data}=await api.signup(formdata)
        dispatch({type:'AUTH',data})
        navigate('/')
    }
    catch(err){
        console.log(err)
    }
}