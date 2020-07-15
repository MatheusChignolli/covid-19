// import React from 'react';
import { CovidData } from './CovidData';

export interface TableCovidData {
    tableTitle: String,
    locationTitle: String,
    casesTitle: String,
    deathsTitle: String,
    suspectsTitle: String,
    covidData: CovidData[]
}