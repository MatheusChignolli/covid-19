import React, { ChangeEvent, useState, useEffect } from 'react';
import { sortByBrazilStateName } from '../../services/Methods/ArrayFormatter';
import CircularProgress from '@material-ui/core/CircularProgress';
import _ from 'lodash';


// Importando Interfaces
import { TableCovidData } from '../../interfaces/TableCovidData';
import { CovidData } from '../../interfaces/CovidData';
import { ChartData } from '../../interfaces/ChartData';

import TableItem from './TableItem';
import Chart from '../Chart';

import './styles.sass';

const Table: React.FC<TableCovidData> = (props) => {

    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [filteredWord, setFilteredWorld] = useState<string>('');
    const [tableData, setTableData ] = useState<TableCovidData>(props);
    const [filteredTableData,  setFilteredTableData] = useState<CovidData[]>([]);;
    const [chartData, setChartData] = useState<ChartData>({
        state: '',
        uf: 'SP',
        cases: 0,
        deaths: 0,
        suspects: 0,
        isWorld: false,
    });

    const {
        tableTitle,
        locationTitle,
        casesTitle,
        deathsTitle,
        suspectsTitle,
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

        var filteredData = covidData.filter(obj => _.kebabCase(obj.state).includes(inputText));

        setFilteredTableData(filteredData);
    }

    function updateChart(state: string, uf: string, cases: number, deaths: number, suspects: number, isWorld: boolean) {
        setChartData({
            state,
            uf,
            cases,
            deaths,
            suspects,
            isWorld
        })
    }

    return (
        <>
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
                                                updateChart={() => {updateChart(obj.state, obj.uf, obj.cases, obj.deaths, obj.suspects, false)}}
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
                            state={chartData?.state}
                            uf={chartData?.uf}
                            cases={chartData?.cases}
                            deaths={chartData?.deaths}
                            suspects={chartData?.suspects}
                            isWorld={false}
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

export default Table;