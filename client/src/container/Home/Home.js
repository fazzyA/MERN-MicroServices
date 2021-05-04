import React, { useEffect, useState, useContext } from 'react'
import { Grid, Box } from '@material-ui/core';
import axios from 'axios'
import { fetchCS } from '../../utils/CSAPICalls'
import { fetchHistory } from '../../utils/HistoryAPICalls'
import { UC } from '../../context/UserContext'
import Register from '../../components/Register';
import Growl from '../../components/Growl';
import { add} from '../../utils/TrAPICalls'

function Home() {
    const [AllList, setAllList] = useState([])
    const [columns, setColumns] = useState([
        { title: 'title', field: 'title' },
        { title: 'description', field: 'description' },
        { title: 'category', field: 'category' },
        { title: 'date', field: 'date' },
    ]);
    const [property, setProperty] = useState({
        error: '',
        open: false,
        severity: '',
    })
    const [state, setState] = useContext(UC)
    const handleBorrow =({book,category})=>{
        add({book, category, userID:state.userID,userName:state.userName})
        setProperty({
         ...property,
         msg: "Book is borrowed",
         severity: 'error',
         open: true,
     });
   }
       const getDataFromDb = () => {
        Promise.all([
            fetchHistory,
            fetchCS,
        ]
            .map(url => (
                url()
                    .then(res => res.data.data))
            )
        )
            .then(res => {
                // console.log(res);
                setAllList([...res[0], ...res[1]])
            })
        // .then(([passed, failed, data2]) => 
        //   this.setState({ passed, failed, data2 })
        // );
    }
    useEffect(() => {
        getDataFromDb();

    }, [])

    const handleClose = () => {
        setProperty({ ...property, open: false })
    }
    
    return (
        <Grid container spacing={1}>
       <Growl
                    property={property}
                    close={handleClose}
                    onClick={handleClose}
                />
           <Grid item xs={12} md={12} lg={12} className="">
                <Register
                    title={`Books Library`}
                    columns={columns}
                    list={AllList}
                    borrowBtn={true}
                   handleBorrow={handleBorrow}
                />
            </Grid>

        </Grid>
    )
}

export default Home
