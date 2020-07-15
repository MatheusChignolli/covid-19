import React, { useState, /* useEffect */ } from 'react';

// Importando Interfaces
import { TableCovidData } from '../../interfaces/TableCovidData';

import TableItem from './TableItem';

import './styles.sass';

const Table: React.FC<TableCovidData> = (props) => {

    const [tableData, /* setTableData */] = useState<TableCovidData>(props);

    const {
        tableTitle,
        locationTitle,
        casesTitle,
        deathsTitle,
        suspectsTitle,
        covidData,
    } = tableData;

    // useEffect(() => {
    //     setTableData({...tableData, covidData: props.covidData})
    // }, [props])

    return (
        <section className="main-table">
            <h1>{tableTitle}</h1>
            <header>
                <div>{locationTitle}</div>
                <div>{casesTitle}</div>
                <div>{deathsTitle}</div>
                <div>{suspectsTitle}</div>
            </header>
            <div className="table-content">
                {
                    typeof covidData !== 'undefined' ?
                        props.covidData.map(obj => {
                            return <TableItem
                                        key={'table-item-' + obj.uid} 
                                        uid={obj.uid} 
                                        uf={obj.uf} 
                                        state={obj.state} 
                                        cases={obj.cases} 
                                        deaths={obj.deaths} 
                                        suspects={obj.suspects} 
                                        refuses={obj.refuses} 
                                        datetime={obj.datetime}
                                    />
                        })
                    : null
                }
            </div>
        </section>
    )
}

export default Table;