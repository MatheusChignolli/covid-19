import { CountriesCovidData } from '../../interfaces/CountriesCovidData';
import { CovidData } from '../../interfaces/CovidData';

export function sortByCountryName(a: CountriesCovidData[]) {
    return a.sort(function(a, b) {
        var textA = a.country.toUpperCase();
        var textB = b.country.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
}

export function sortByBrazilStateName(a: CovidData[]) {
    return a.sort(function(a, b) {
        var textA = a.state.toUpperCase();
        var textB = b.state.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    })
}