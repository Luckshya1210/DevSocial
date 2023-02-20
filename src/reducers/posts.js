export default (state={isLoading:true,posts:[]},action)=>{
    //state == [posts] as we are in posts reducer
    switch(action.type){
        case 'START_LOADING':
            return {...state,isLoading:true}
        case 'END_LOADING':
            return {...state,isLoading:false}
        case 'FETCH_ALL':
            return {
                ...state,
                posts:action.payload.data,
                currentPage:action.payload.numberOfPages
            }
        case 'FETCH_SEARCH':
            return {...state,posts:action.payload}
        case 'FETCH_POST':
            return {...state,post:action.payload}
        case 'CREATE':
            return {...state,posts:[...state.posts,action.payload]}
        case 'UPDATE':
            return {...state,posts:state.posts.map((post)=>post._id===action.payload._id?action.payload:post)}
        case 'LIKE':
            return {...state,posts:state.posts.map((post)=>post._id===action.payload._id?action.payload:post)}
        case 'COMMMENT':
            return {...state,posts:state.posts.map((post)=>{
                //return all other posts and update commented post
                if(post._id==action.payload._id){
                    return action.payload
                }
                return post;
            })}
        case 'DELETE':
            return {...state,posts:state.posts.filter((post)=>post._id!==action.payload)}
        default:
            return state;
    }
}