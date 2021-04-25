import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

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

export default function HistoryList() {
  const classes = useStyles();
  const [HistoryList, setHistoryList] = useState([])
  const baseURL = process.env.REACT_APP_DB1
  useEffect(() => {
    axios.get(`${baseURL}/`)
      .then(res => {
        console.log(res)
        let historybooks = res.data.data
        setHistoryList(historybooks)
      })
      .catch(err => console.log(err, 'error'));
  }, [])

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {HistoryList.map((item) => (
          <Grid item xs={10} md={6} lg={6} className="box">
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
