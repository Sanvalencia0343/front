import {Box} from '@mui/material';
import React from 'react';
import FormRegister from '../components/register/FormRegister';


const Register = () => {
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
        <FormRegister/>
        </Box>
    )
}

export default Register;