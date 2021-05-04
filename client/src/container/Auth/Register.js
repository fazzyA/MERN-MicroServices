import React, { useState, useContext } from 'react'
import { Grid, TextField, Typography, Button} from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {UC} from  '../../context/UserContext'
import { Register } from '../../utils/UserAPICalls'


function SignUp() {
    const [state, setState] = useContext(UC)

    const [email,setEmail] = useState('');
    const [password,setPwd] = useState('');
    const [name,setName] = useState('');
    
    const history = useHistory();
    // to check single user and no repeat
    const [unique, setUnique] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {name, email, password};
        // console.log(user)
            Register(user)
            .then(res => {
                console.log(res);
                console.log('Register successful')
                setState({isRegister: true, 
                    userName:res.data.username, 
                    userID:res.data.dbid})
                localStorage.setItem('userData', JSON.stringify(res.data))

                history.push('/')
            })
            .catch(err=>console.log(err,'error'));
    }

    console.log(state);

    return (
        <div>
            <Grid container spacing={3}>
                
                <Grid item xs={1} md={2} lg={3}>
                </Grid>
                {/* {unique ? <span>Register sucessful</span> : <span>Register failed</span>} */}
                <Grid item xs={10} md={8} lg={6} className='form-container' >
                    <Typography variant='h4' className='title' >Register</Typography>
                    <form className='signup-form' onSubmit={handleSubmit}>

                    <Grid className='signup-inputs' container spacing={1} alignItems="flex-end">
                        <Grid item item sm={10} md={6}>
                            <TextField className='input-textfield'  label="Name"
                            onChange={(e)=>setName(e.target.value)} />
                        </Grid>
                    </Grid>
                    <Grid className='signup-inputs' container spacing={1} alignItems="flex-end">
                        <Grid item item sm={10} md={6}>
                            <TextField className='input-textfield'  label="Email"
                            onChange={(e)=>setEmail(e.target.value)} />
                        </Grid>
                    </Grid>

                    <Grid className='signup-inputs' container spacing={1} alignItems="flex-end">
                        <Grid item item sm={10} md={6}>
                            <TextField className='input-textfield' label="Password" type='password'  
                            onChange={(e)=>setPwd(e.target.value)} />
                        </Grid>
                    </Grid>

                    <Grid className='signup-inputs' container spacing={1} alignItems="flex-end">
                        <Grid item item sm={10} md={6}>
                           <Button type='submit' variant='contained' className='submit'>Submit</Button>
                        </Grid>
                    </Grid>

                    <Grid className='signup-inputs' container spacing={1} alignItems="flex-end">
                        <Grid item item sm={10} md={6}>
                            Don't have an account? Sign up <a href=''>here</a>
                        </Grid>
                    </Grid>

                    </form>
                </Grid>
                
                <Grid item xs={1} md={2} lg={3}>
                </Grid>

            </Grid>

        </div>
    )
}

export default SignUp