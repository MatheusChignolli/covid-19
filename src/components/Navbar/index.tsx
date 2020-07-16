import React from 'react';
import { Link } from 'react-router-dom';

import './styles.sass';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Brasil</Link></li>
                <li><Link to='/world'>Mundo</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;