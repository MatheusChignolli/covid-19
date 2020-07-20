import React, { useState, useEffect } from 'react';
import { dateFormatter } from '../../services/Methods/DateFormatter';
import numberFormatter from '../../services/Methods/NumberFormatter';

import { PageHeader } from '../../interfaces/PageHeader';

import './styles.sass';

const Header: React.FC<PageHeader> = (props) => {

    const[brazilCases, setBrazilCases] = useState(props);
    const {
        mainTitle,
        casesTitle,
        deathsTitle,
        confirmedTitle,
        recoveredTitle,
        updatedAtTitle,
        mainData,
    } = brazilCases;

    useEffect(() => {
        setBrazilCases(props);
    }, [props])

    return(
        <header className="main-header">
            <h1>{mainTitle}</h1>
            <div className="main-data">
                <div className="main-data-item">
                    <h2>{confirmedTitle}: <b>{numberFormatter(mainData?.confirmed, 0, '', '.')}</b></h2>
                </div>
                <div className="main-data-item">
                    <h2>{casesTitle}: <b>{numberFormatter(mainData?.cases, 0, '', '.')}</b></h2>
                </div>
                <div className="main-data-item">
                    <h2>{recoveredTitle}: <b>{numberFormatter(mainData?.recovered, 0, '', '.')}</b></h2>
                </div>
                <div className="main-data-item">
                    <h2>{deathsTitle}: <b>{numberFormatter(mainData?.deaths, 0, '', '.')}</b></h2>
                </div>
            </div>
    <div className="main-updated-at">{updatedAtTitle + (mainData ? dateFormatter(mainData?.updated_at) : null)}</div>
        </header>
    )
}

export default Header;