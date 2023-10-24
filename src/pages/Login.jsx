import {Box} from '@mui/material';
import React from 'react';
import FormLogin from '../components/login/FormLogin';

const Login = () => {
    return(
        <Box sx={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/wallpaperFont.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
            }}>
            <FormLogin/>
        </Box>
    )
}

export default Login;