import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

// Importar páginas
import Home from './pages/Home';

// Importar Componentes
import Navbar from './components/Navbar';

const Routes = () => {
    return(
        <>
            <Navbar/>
            <main>
                <BrowserRouter>
                    <Route component={Home} Path="/" />
                </BrowserRouter>
            </main>
        </>
    )
}

export default Routes;