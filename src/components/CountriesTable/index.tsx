import React, { useState, /* useEffect */ } from 'react';
import { sortByCountryName } from '../../services/Methods/ArrayFormatter';
import _ from 'lodash';

// Importando Interfaces
import { TableCountriesCovidData } from '../../interfaces/TableCountriesCovidData';

import CountriesTableItem from './CountriesTableItem';

import './styles.sass';

const Countries: React.FC<TableCountriesCovidData> = (props) => {

    const [tableData, /* setTableData */] = useState<TableCountriesCovidData>(props);

    const {
        tableTitle,
        locationTitle,
        casesTitle,
        deathsTitle,
        recoveredTitle,
        confirmedTitle,
        covidData,
    } = tableData;

    // useEffect(() => {
    //     setTableData({...tableData, covidData: props.covidData})
    // }, [props])

    return (
        <section className="main-table countries-table">
            <h1>{tableTitle}</h1>
            <header>
                <div>{locationTitle}</div>
                <div>{confirmedTitle}</div>
                <div>{casesTitle}</div>
                <div>{recoveredTitle}</div>
                <div>{deathsTitle}</div>
            </header>
            <div className="table-content">
                {
                    typeof covidData !== 'undefined' ?
                        sortByCountryName(props.covidData).map(obj => {
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