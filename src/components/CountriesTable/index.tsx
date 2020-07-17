import React, { ChangeEvent, useState, useEffect } from 'react';
import { sortByCountryName } from '../../services/Methods/ArrayFormatter';
import _ from 'lodash';

// Importando Interfaces
import { TableCountriesCovidData } from '../../interfaces/TableCountriesCovidData';
import { CountriesCovidData } from '../../interfaces/CountriesCovidData';

import CountriesTableItem from './CountriesTableItem';

import './styles.sass';

const Countries: React.FC<TableCountriesCovidData> = (props) => {

    const [filteredWord, setFilteredWorld] = useState<string>('');
    const [tableData, setTableData] = useState<TableCountriesCovidData>(props);
    const [filteredTableData,  setFilteredTableData] = useState<CountriesCovidData[]>([]);;

    const {
        tableTitle,
        locationTitle,
        casesTitle,
        deathsTitle,
        recoveredTitle,
        confirmedTitle,
        covidData,
    } = tableData;

    useEffect(() => {
        setFilteredTableData(props.covidData);
        setTableData({...tableData, covidData: props.covidData});
    }, [props])

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        var inputText = e.target.value;
        setFilteredWorld(inputText);
        inputText = _.kebabCase(inputText);

        var filteredData = covidData.filter(obj => _.kebabCase(obj.country).includes(inputText));

        setFilteredTableData(filteredData);
    }

    return (
        <section className="main-table countries-table">
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
                <div>{confirmedTitle}</div>
                <div>{casesTitle}</div>
                <div>{recoveredTitle}</div>
                <div>{deathsTitle}</div>
            </header>
            <div className="table-content">
                {
                    typeof filteredTableData !== 'undefined' ?
                        sortByCountryName(filteredTableData).map(obj => {
                            return <CountriesTableItem
                                        key={'table-item-' + _.kebabCase(obj.country)} 
                                        confirmed={obj.confirmed}
                                        cases={obj.cases}
                                        country={obj.country}
                                        deaths={obj.deaths}
                                        recovered={obj.recovered}
                                        updated_at={obj.updated_at}
                                    />
                        })
                    : null
                }
            </div>
        </section>
    )
}

export default Countries;