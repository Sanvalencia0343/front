import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Update from '../pages/Update';

const Approuter = () => {
    return (
        <Routes>
            <Route path="/" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/home" Component={Home}  />
            <Route path="/update/:userId" Component={Update}  />

        </Routes>
    )
}

export default Approuter;