import React, { useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { fetchTr } from '../../utils/TrAPICalls'
import Register from '../../components/Register';
import { UC } from '../../context/UserContext'

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


export default function BorrowBook() {

  const classes = useStyles();
  const [CSList, setCSList] = useState([])
  const [state, setState] = useContext(UC)
  const [columns, setColumns] = useState([
    { title: 'Book', field: 'book' },
    { title: 'category', field: 'category' },
    { title: 'userName', field: 'userName' },
    { title: 'Date', field: 'date' },
  ]);

  useEffect(() => {

    fetchTr(state.userName)
      .then(res => {
        console.log(res)
        let csbooks = res.data.data
        setCSList(csbooks)
      })
  }, [])
  console.log(CSList);
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} className="">
          <Register list={CSList}
            title={`All Borrowed Books`}
            columns={columns}
            borrowBtn={false}
          />
        </Grid>
      </Grid>
    </div>
  );
}
