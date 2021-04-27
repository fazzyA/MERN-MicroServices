import React, { useState } from 'react'
import { Button, TextField, Grid  } from '@material-ui/core';
import axios from 'axios'

function HistoryCreate() {
  const [Header, setHeader] = useState({
    title: '',
    description: ''
  })

  const baseURL = process.env.APP_DB1

  const handleSubmit = (e) => {
    e.preventDefault()

      axios.post(`${baseURL}/add`,Header)
          .then(res => {
        console.log(res)
        //history.push('/posts');
      })
    .catch(err => console.log(err, 'error'));
  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField onChange={e=>setHeader(prevState=>({...prevState, title:e.target.value}))} id="titl-basic" label="title" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField onChange={e=>setHeader(prevState=>({...prevState, description:e.target.value}))} id="description-basic" label="description" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="secondary" type="submit">add</Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default HistoryCreate
