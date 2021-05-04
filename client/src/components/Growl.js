import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

export default function Growl(props) {
    
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            style={{ marginTop: 50 }}
            open={props.property.open}
            autoHideDuration={2000}
            onClose={props.close}
        >
            <MuiAlert onClose={props.close} elevation={6} variant="filled" severity={props.property.severity}>
                {props.property.msg}
            </MuiAlert >
        </Snackbar>
    )
}