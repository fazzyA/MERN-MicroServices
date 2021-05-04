import React, { useEffect, useState,useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { fetchHistory} from '../../utils/HistoryAPICalls'
import { add} from '../../utils/TrAPICalls'
import {UC} from  '../../context/UserContext'
import Register from '../../components/Register';
import Growl from '../../components/Growl';


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
  const baseURL = process.env.APP_DB1
  const [state, setState] = useContext(UC)
  const [columns, setColumns] = useState([
    { title: 'title', field: 'title' },
    { title: 'description', field: 'description' },
    { title: 'date', field: 'date' },
  ]);
  const [property, setProperty] = useState({
    error: '',
    open: false,
    severity: '',
})

  const handleBorrow =({book, category})=>{
     add({book, category, userID:state.userID,userName:state.userName})
     setProperty({
      ...property,
      msg: "Book is borrowed",
      severity: 'error',
      open: true,
  });
}
  useEffect(() => {

    fetchHistory()
    .then(res => {
     console.log(res.data.data)
    let csbooks = res.data.data
    setHistoryList(csbooks)
    })
  }, [])
  const handleClose = () => {
    setProperty({ ...property, open: false })
}

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
      <Growl
                    property={property}
                    close={handleClose}
                    onClick={handleClose}
                />
        {/* {CSList.map((item) => (
          <Grid item xs={10} md={6} lg={6} className="">
            <Box bgcolor="info.main" color="info.contrastText" p={3}>
              <p>{item.title}</p>
              <p>{item.description}</p>
              <FontAwesomeIcon icon={faBook} onClick={()=>handleBorrow({book:item.title})} />
            </Box>
          </Grid>
        ))} */}
        <Grid item xs={12} md={12} lg={12} className="">
          <Register 
          title={`History Book List`}
          columns={columns}
          list={HistoryList}
          borrowBtn={true}
          handleBorrow={handleBorrow}/>
        </Grid>
      </Grid>
    </div>
  );
}
