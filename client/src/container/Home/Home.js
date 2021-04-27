import React, { useEffect, useState } from 'react'
import { Grid, Box } from '@material-ui/core';
import axios from 'axios'
import { fetchCS } from '../../utils/CSAPICalls'
import { fetchHistory } from '../../utils/HistoryAPICalls'

function Home() {
    const baseURL1 = process.env.APP_DB1
    const baseURL2 = process.env.APP_DB2
    const [AllList, setAllList] = useState([])
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
            console.log(res);
            setAllList([...res[0],...res[1]])
        })
        // .then(([passed, failed, data2]) => 
        //   this.setState({ passed, failed, data2 })
        // );
      }
    useEffect(() => {
        getDataFromDb();
//         axios.get(`${baseURL2}/`)
//             .then(res => {
//                 let csbooks = res.data.data
//                 let allTasks = csbooks.map((currentTask) => {
//                     return { ...currentTask, completed: false }
//                 })
//                  setCSList(csbooks)
//                 setAllList(allTasks)
//             })
//             .catch(err => console.log(err, 'error'));
// console.log(CSList, HistoryList, AllList);
// //..........................

//         axios.get(`${baseURL1}/`)
//             .then(res => {
//                 let historybooks = res.data.data
//                 let all = historybooks.map((currentTask) => {
//                     return { ...currentTask, completed: false }
//                 })
//                 setHistoryList(all)
//                 setAllList(AllList.concat(all))
//             })
//             .catch(err => console.log(err, 'error'));

    }, [])

    return (
        <Grid container spacing={1}>

            {AllList.map((item, index) => (

                <Grid item xs={12} sm={6} lg={6} key={index}>
                    <Box bgcolor="info.main" color="info.contrastText" p={2}>
                        {item.title}
                    </Box>
                </Grid>

            ))}

        </Grid>
    )
}

export default Home
