import React, { useState,useEffect } from 'react'
import MaterialTable from 'material-table'
import {tableIcons} from './Icons'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
export default function Register({title,list,handleBorrow, borrowBtn=false, columns}) {
    const { useState } = React;
  
   const onBorrow =(rowData)=>{
console.log(rowData);
handleBorrow({book:rowData.title, category: rowData.category});

    } 
    const [data, setData] = useState([]);
  useEffect(() => {
setData(list)
}, [list]) 
console.log(data)
    return (
      <MaterialTable
        title={title}
        columns={columns}
        icons={tableIcons}
        data={data}
        options={{
          actionsColumnIndex: -1
       }}
       actions={[
        rowData => ({
            icon: AddCircleOutlineOutlinedIcon,
            tooltip: 'borrow',
            // disabled: rowData.SubmitStatus === 1 ? true : false,
            hidden: borrowBtn ? false: true,
            // disabled: EditRights || rowData.SubmitStatus === 1 ? true : false,
            onClick: (event, rowData) =>{
              onBorrow(rowData);
          },

        }),
      ]}

        editable={{
          // onRowAdd: newData =>
          //   new Promise((resolve, reject) => {
          //     setTimeout(() => {
          //       setData([...data, newData]);
                
          //       resolve();
          //     }, 1000)
          //   }),
          // onRowUpdate: (newData, oldData) =>
          //   new Promise((resolve, reject) => {
          //     setTimeout(() => {
          //       const dataUpdate = [...data];
          //       const index = oldData.tableData.id;
          //       dataUpdate[index] = newData;
          //       setData([...dataUpdate]);
  
          //       resolve();
          //     }, 1000)
          //   }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                
                resolve()
              }, 1000)
            }),
        }}
      />
    )
  }
  