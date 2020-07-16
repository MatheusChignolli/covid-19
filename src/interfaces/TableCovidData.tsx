// import React from 'react';
import { CovidData } from './CovidData';

export interface TableCovidData {
    tableTitle: string,
    locationTitle: string,
    casesTitle: string,
    deathsTitle: string,
    suspectsTitle: string,
    covidData: CovidData[]
}