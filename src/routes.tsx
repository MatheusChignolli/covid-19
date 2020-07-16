import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import World from './pages/World';

import Navbar from './components/Navbar';

const Routes = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <main>
                <Route component={Home} path={'/'} exact/>
                <Route component={World} path={'/world'}/>
            </main> 
        </BrowserRouter>
    )
}

export default Routes;