import {Box} from '@mui/material';
import React from 'react';
import ResponsiveAppBar from '../components/layout/nav';
import FormUpdate from '../components/update/FormUpdate';


const Home = () => {
    return(
        <Box>
            <ResponsiveAppBar/>
            <FormUpdate/>
        </Box>
    )
}

export default Home;