import React from 'react';
import { Link } from 'react-router-dom';

import './styles.sass';

const Navbar = () => {
    return (
        <nav>
            <div className="top-title">
                <img src="/images/covid-logo.png" alt="teste"/>
                <h2> Relatório Covid-19</h2>
            </div>
            <div className="top-menu">
                <ul>
                    <li><Link to='/'>Brasil</Link></li>
                    <li><Link to='/world'>Mundo</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;