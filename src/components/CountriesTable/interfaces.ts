import { CountriesCovidData } from 'interfaces/CountriesCovidData'

export interface TableCountriesCovidData {
  tableTitle: string
  locationTitle: string
  casesTitle: string
  deathsTitle: string
  recoveredTitle: string
  confirmedTitle: string
  covidData: CountriesCovidData[]
}
