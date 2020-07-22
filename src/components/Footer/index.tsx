import React from 'react';
import { FaGithub, FaLinkedin, FaUserAstronaut } from 'react-icons/fa'

import './styles.sass';

const Footer = () => {
    return (
        <footer>
            <div className="footer-data">
                <div className="footer-item">
                    <h4>Contato</h4>
                    <ul>
                        <li><a target="_blank" rel="noopener noreferrer" title="Github" href="https://github.com/MatheusChignolli"><FaGithub/></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" title="LinkedIn" href="https://www.linkedin.com/in/matheus-richard-chignolli-a0115b155/"><FaLinkedin/></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" title="Site" href="https://chignolli.com.br"><FaUserAstronaut/></a></li>
                    </ul>
                </div>
                <div className="footer-item">

                </div>
                <div className="footer-item">

                </div>
            </div>
        </footer>
    )
}

export default Footer