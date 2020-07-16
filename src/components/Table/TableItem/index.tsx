import React, { useState, useEffect } from 'react';
import NumberFormatter from '../../../services/Methods/NumberFormatter';
import { githubApi } from '../../../services/api';

// Importando Interfaces
import { CovidData } from '../../../interfaces/CovidData';

const TableItem: React.FC<CovidData> = (props) => {
    
    const [stateFlag, setStateFlag] = useState<string>(); 

    const[{
        // uid,
        uf,
        state,
        cases,
        deaths,
        suspects,
        // refuses,
        // datetime,
    }/*, setStateData*/] = useState<CovidData>(props);

    useEffect(() => {
        setStateFlag(githubApi + `/covid19-brazil-api/static/flags/${uf}.png`);
    }, [uf]);

    return (
        <div className="table-line">
            <div className="table-item"><img src={stateFlag} alt={uf + ' Flag'}/>{state} ({uf})</div>
            <div className="table-item">{NumberFormatter(cases, 0, '', '.')}</div>
            <div className="table-item">{NumberFormatter(deaths, 0, '', '.')}</div>
            <div className="table-item">{NumberFormatter(suspects, 0, '', '.')}</div>
        </div>
    )
}

export default TableItem;