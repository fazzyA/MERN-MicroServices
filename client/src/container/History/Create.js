import React, { useState } from 'react'
import { Button, TextField, Grid  } from '@material-ui/core';
import { add } from '../../utils/HistoryAPICalls'
import { useHistory } from 'react-router-dom';

function HistoryCreate() {
  const [Header, setHeader] = useState({
    title: '',
    description: '',
    category:'history'
  })

  const baseURL = process.env.APP_DB1
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()
    add(Header)
    .then(res=>{
      console.log('History book added')
      history.push('/history')
    })
    .catch(e=>console.log(e))

  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <Grid container spacing={3}>
        <Grid item xs={3}>
           </Grid>
          <Grid item xs={9}>
            <TextField onChange={e=>setHeader(prevState=>({...prevState, title:e.target.value}))} id="titl-basic" label="title" variant="outlined" />
          </Grid>
          <Grid item xs={3}>
           </Grid>
         <Grid item xs={9}>
            <TextField onChange={e=>setHeader(prevState=>({...prevState, description:e.target.value}))} id="description-basic" label="description" variant="outlined" />
          </Grid>
          <Grid item xs={3}>
           </Grid>
         <Grid item xs={9}>
            <Button variant="contained" color="primary" type="submit">add</Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default HistoryCreate
