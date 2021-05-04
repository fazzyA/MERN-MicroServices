import React, { useEffect, useState,useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { fetchCS} from '../../utils/CSAPICalls'
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


export default function CSList() {

  const classes = useStyles();
  const [CSList, setCSList] = useState([])
  const baseURL = process.env.APP_DB2
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

    fetchCS()
    .then(res => {
     console.log(res.data.data)
    let csbooks = res.data.data
    setCSList(csbooks)
    })
    // axios.get(`${baseURL}/`)
    //   .then(res => {
    //     console.log(res)
    //     let csbooks = res.data.data
    //     setCSList(csbooks)
    //   })
    //   .catch(err => console.log(err, 'error'));
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
          title={`CS Book List`}
          columns={columns}
          list={CSList}
          borrowBtn={true}
          handleBorrow={handleBorrow}/>
        </Grid>
      </Grid>
    </div>
  );
}
