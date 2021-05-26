import { CountriesCovidData } from '../../interfaces/CountriesCovidData'
import { CovidData } from '../../interfaces/CovidData'

export function sortByCountryName(a: CountriesCovidData[]): any {
  return a.sort(function (a, b) {
    const textA = a.country.toUpperCase()
    const textB = b.country.toUpperCase()
    return textA < textB ? -1 : textA > textB ? 1 : 0
  })
}

export function sortByBrazilStateName(a: CovidData[]): any  {
  return a.sort(function (a, b) {
    const textA = a.state.toUpperCase()
    const textB = b.state.toUpperCase()
    return textA < textB ? -1 : textA > textB ? 1 : 0
  })
}
