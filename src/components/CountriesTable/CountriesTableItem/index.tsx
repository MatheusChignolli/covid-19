import React from 'react'
import _ from 'lodash'
import NumberFormatter from '../../../services/Methods/NumberFormatter'
import { TextAbstract } from '../../../services/Methods/TextFormatter'
import { setCountryFlag } from '../../../services/Methods/CountryFlag'

import { CountriesCovidData } from '../../../interfaces/CountriesCovidData'

const CountriesTableItem: React.FC<CountriesCovidData> = ({
  cases,
  confirmed,
  country,
  deaths,
  recovered,
  updateChart,
}) => {
  function updateIsSelected() {
    const isSelectedItems = document.getElementsByClassName('selected')
    for (let i = 0; i < isSelectedItems.length; i++) {
      isSelectedItems[i].classList.remove('selected')
    }
    const isSelectedItem = document.getElementById(
      'table-item-' + _.kebabCase(country)
    )
    if (isSelectedItem) isSelectedItem.classList.add('selected')
  }

  return (
    <div
      className="table-line"
      id={'table-item-' + _.kebabCase(country)}
      onClick={() => {
        updateChart()
        updateIsSelected()
      }}
    >
      <div className="table-item">
        {<img src={setCountryFlag(country)} alt={country + ' Flag'} />}
        {TextAbstract(country, 25)}
      </div>
      <div className="table-item">{NumberFormatter(confirmed, 0, '', '.')}</div>
      <div className="table-item">{NumberFormatter(cases, 0, '', '.')}</div>
      <div className="table-item">{NumberFormatter(recovered, 0, '', '.')}</div>
      <div className="table-item">{NumberFormatter(deaths, 0, '', '.')}</div>
    </div>
  )
}

export default CountriesTableItem
