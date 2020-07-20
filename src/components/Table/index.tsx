import React, { ChangeEvent, useState, useEffect } from 'react';
import { sortByBrazilStateName } from '../../services/Methods/ArrayFormatter';
import CircularProgress from '@material-ui/core/CircularProgress';

// Importando Interfaces
import { TableCovidData } from '../../interfaces/TableCovidData';
import { CovidData } from '../../interfaces/CovidData';
import _ from 'lodash';

import TableItem from './TableItem';

import './styles.sass';

const Table: React.FC<TableCovidData> = (props) => {

    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [filteredWord, setFilteredWorld] = useState<string>('');
    const [tableData, setTableData ] = useState<TableCovidData>(props);
    const [filteredTableData,  setFilteredTableData] = useState<CovidData[]>([]);;

    const {
        tableTitle,
        locationTitle,
        casesTitle,
        deathsTitle,
        suspectsTitle,
        covidData,
    } = tableData
    

    useEffect(() => {
        setFilteredTableData(props.covidData);
        setTableData(props);
    }, [props])

    useEffect(() => {
        if(covidData.length > 0) {
            setIsLoaded(true);
        }
    }, [covidData])

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        var inputText = e.target.value;
        setFilteredWorld(inputText);
        inputText = _.kebabCase(inputText);

        var filteredData = covidData.filter(obj => _.kebabCase(obj.state).includes(inputText));

        setFilteredTableData(filteredData);
    }

    return (
        <section className="main-table">
            <h1>{tableTitle}</h1>
            <div className="input-group">
                <label htmlFor="filter-input">Filtro:</label>
                <input 
                    id="filter-input"
                    name="filter-input"
                    type="text"
                    onChange={handleInputChange}
                    value={filteredWord}
                />
            </div>
            <header>
                <div>{locationTitle}</div>
                <div>{casesTitle}</div>
                <div>{deathsTitle}</div>
                <div>{suspectsTitle}</div>
            </header>
            <div className="table-content">
                {   isLoaded ?
                        typeof filteredTableData !== 'undefined' ?
                            sortByBrazilStateName(filteredTableData).map(obj => {
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
                    : (
                        <div className="loader-component">
                            <CircularProgress/>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Table;