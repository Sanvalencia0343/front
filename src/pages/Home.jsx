import {Box} from '@mui/material';
import React from 'react';
import ResponsiveAppBar from '../components/layout/nav';
import DataTableUsers from '../components/home/tableUser';

const Home = () => {
    return(
        <Box>
            <ResponsiveAppBar/>
            <DataTableUsers/>
        </Box>
    )
}

export default Home;