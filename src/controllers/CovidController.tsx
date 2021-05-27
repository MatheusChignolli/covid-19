import { api } from 'services/api'

import { CovidData } from '../interfaces/CovidData'
import { CountriesCovidData } from '../interfaces/CountriesCovidData'

export const getBrazilStatesCases = async (): Promise<CovidData[]> => {
  return await api.get('/api/report/v1/').then((res) => {
    return res.data.data
  })
}

export const getBrazilCases = async (): Promise<CountriesCovidData> => {
  return await api.get('/api/report/v1/brazil').then((res) => {
    return res.data.data
  })
}

export const getCountriesCases = async (): Promise<CountriesCovidData[]> => {
  return await api.get('/api/report/v1/countries').then((res) => {
    return res.data.data
  })
}
