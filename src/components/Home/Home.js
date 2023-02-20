import React, { useEffect, useState } from 'react'
import {Container,Grow,Grid, Paper,AppBar,TextField,Button} from '@material-ui/core'
import Posts from '../Posts/Posts'
import Form from '../Forms/Form'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import ChipInput from 'material-ui-chip-input';
import { getPosts ,getpostbysearch  } from '../../actions/posts'
import useStyles from './styles'
import Pagination from '../Pagination'
function useQuery(){
  return new URLSearchParams(useLocation().search)
}
const Home = () => {
    const [currentId,setcurrentId]=useState(null)
    const classes=useStyles();
    const dispatch=useDispatch()
    const [search,setsearch]=useState('')
    const [tags,settags]=useState([])
    const query=useQuery();
    const navigate=useNavigate()
    const page=query.get('page')||1
    const searchQuery=query.get('searchQuery')
    const searchPost=()=>{
      if(search.trim() || tags){
        //dispatch fetch search post
        dispatch(getpostbysearch({search,tags:tags.join(',')}))
        navigate(`/posts/search?searchQuery=${search||'none'}&tags=${tags.join(',')}`)
      }else{
        navigate('/')
      }
    }
      const handlekeypress =(e)=>{
        if(e.keyCode===13){
          searchPost()
        }
      }
    // useEffect(()=>{
    //   dispatch(getPosts())
    // },[currentId,dispatch])
    const handleAdd=(tag)=>settags([...tags,tag])
    const handleDel=(tagtodel)=>settags(tags.filter((tag)=>tag!=tagtodel))
  return (
    <Grow in>
          <Container   maxWidth="xl">
            <Grid className={classes.maincont} container justifyContent="space-between" alignItems="stretch" spacing={2}  >
              <Grid item xs={12} sm={6} md={9} gap={0} spacing={1}   className={classes.gridContainer}>
                  <Posts setcurrentId={setcurrentId}/>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <AppBar className={classes.appBarSearch} position="static" color="inherit">
                    <TextField name="search" variant="outlined" label="Search" fullWidth value={search} onKeyPress={handlekeypress} onChange={(e)=>setsearch(e.target.value)}/>
                    <ChipInput style={{margin:'10px 0px'}} value={tags} onAdd={handleAdd} onDelete={handleDel} label="Search tags" variant='outlined' />
                    <Button onClick={searchPost} className={classes.searchButton} color="primary" variant='contained'>Search</Button>
                </AppBar>
                  <Form currentId={currentId} setcurrentId={setcurrentId}/>
                  {(!searchQuery && !tags.length)&&(
                    <Paper elevation={6} className={classes.pagination} >
                      <Pagination page={page} />
                    </Paper>
                  )}
              </Grid>
            </Grid>
          </Container>
        </Grow>
  )
}

export default Home