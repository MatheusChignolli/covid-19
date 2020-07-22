import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import World from './pages/World';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Routes = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <main>
                <Route component={Home} path={'/'} exact/>
                <Route component={World} path={'/world'}/>
            </main> 
            <Footer/>
        </BrowserRouter>
    )
}

export default Routes;