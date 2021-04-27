import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));


export default function CSList() {

  const classes = useStyles();
  const [CSList, setCSList] = useState([])
  const baseURL = process.env.APP_DB2
  useEffect(() => {
    axios.get(`${baseURL}/`)
      .then(res => {
        console.log(res)
        let csbooks = res.data.data
        setCSList(csbooks)
      })
      .catch(err => console.log(err, 'error'));
  }, [])

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {CSList.map((item) => (
          <Grid item xs={10} md={6} lg={6} className="">
            <Box bgcolor="info.main" color="info.contrastText" p={3}>
              <p>{item.title}</p>
              <p>{item.description}</p>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
