import React, { useState } from 'react';

// Importando Interfaces
import { CovidData } from '../../../interfaces/CovidData';

const TableItem: React.FC<CovidData> = (props) => {

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

    return (
        <div className="table-line">
            <div className="table-item">{state} ({uf})</div>
            <div className="table-item">{cases}</div>
            <div className="table-item">{deaths}</div>
            <div className="table-item">{suspects}</div>
        </div>
    )
}

export default TableItem;