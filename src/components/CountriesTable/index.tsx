import React, { ChangeEvent, useState, useEffect } from 'react';
import { sortByCountryName } from '../../services/Methods/ArrayFormatter';
import CircularProgress from '@material-ui/core/CircularProgress';
import _ from 'lodash';

// Importando Interfaces
import { TableCountriesCovidData } from '../../interfaces/TableCountriesCovidData';
import { CountriesCovidData } from '../../interfaces/CountriesCovidData';
import { CountriesChartData } from '../../interfaces/CountriesChartData';

import CountriesTableItem from './CountriesTableItem';
import Chart from '../Chart';

import './styles.sass';

const Countries: React.FC<TableCountriesCovidData> = (props) => {

    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [filteredWord, setFilteredWorld] = useState<string>('');
    const [tableData, setTableData] = useState<TableCountriesCovidData>(props);
    const [filteredTableData,  setFilteredTableData] = useState<CountriesCovidData[]>([]);;
    const [chartData, setChartData] = useState<CountriesChartData>({
        country: '',
        confirmed: 0,
        cases: 0,
        recovered: 0,
        deaths: 0,
        isWorld: true,
    });

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

        var filteredData = covidData.filter(obj => _.kebabCase(obj.country).includes(inputText));

        setFilteredTableData(filteredData);
    }

    function updateChart(country: string, confirmed: number, cases: number, recovered: number, deaths: number, isWorld: boolean) {
        setChartData({
            country,
            confirmed,
            cases,
            recovered,
            deaths,
            isWorld,
        })
    }

    return (
        <>
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
                    {   isLoaded ? 
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
                                                updateChart={() => {updateChart(obj.country, obj.confirmed, obj.cases, obj.recovered, obj.deaths, true)}}
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
            <section className="main-chart">
                {   isLoaded ? (
                        <Chart
                            state={chartData?.country}
                            uf={chartData?.confirmed}
                            cases={chartData?.cases}
                            deaths={chartData?.deaths}
                            suspects={chartData?.recovered}
                            isWorld={true}
                        />
                    ) : (
                        <div className="loader-component">
                            <CircularProgress/>
                        </div>
                    )
                }
            </section>
        </>
    )
}

export default Countries;