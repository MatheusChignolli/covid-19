import React, { useState } from 'react';
import NumberFormatter from '../../../services/Methods/NumberFormatter';
import { TextAbstract } from '../../../services/Methods/TextFormatter';

// Importando Interfaces
import { CountriesCovidData } from '../../../interfaces/CountriesCovidData';

const CountriesTableItem: React.FC<CountriesCovidData> = (props) => {

    const[countriesCovidData, /* setCountriesCovidData */] = useState<CountriesCovidData>(props);

    const {
        cases,
        confirmed,
        country,
        deaths,
        recovered,
        // updated_at
    } = countriesCovidData;

    return (
        <div className="table-line">
            <div className="table-item">{TextAbstract(country, 25)}</div>
            <div className="table-item">{NumberFormatter(confirmed, 0, '', '.')}</div>
            <div className="table-item">{NumberFormatter(cases, 0, '', '.')}</div>
            <div className="table-item">{NumberFormatter(recovered, 0, '', '.')}</div>
            <div className="table-item">{NumberFormatter(deaths, 0, '', '.')}</div>
        </div>
    )
}

export default CountriesTableItem;