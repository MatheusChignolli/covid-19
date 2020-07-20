import React from 'react';
import { Link } from 'react-router-dom';

import './styles.sass';

const Navbar = () => {
    return (
        <nav>
            <h2>Relatório Covid-19</h2>
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