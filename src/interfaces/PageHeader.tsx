import { CountriesCovidData } from './CountriesCovidData';

export interface PageHeader {
    mainTitle: string,
    deathsTitle: string,
    casesTitle: string,
    confirmedTitle: string,
    recoveredTitle: string,
    updatedAtTitle: string,
    mainData: CountriesCovidData | undefined,
    isLoaded: boolean,
}