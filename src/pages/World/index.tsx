import React, { useEffect, useState } from 'react'
import { getCountriesCases } from 'controllers/CovidController'
import { Header, CountriesTable } from 'components'
import { CountriesCovidData } from 'interfaces/CountriesCovidData'

const World: React.FC = () => {
  const [allCovidData, setAllCovidData] = useState<CountriesCovidData[]>([])
  const [headerCovidData, setHeaderCovidData] =
    useState<CountriesCovidData | undefined>()
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    const covidData = getCountriesCases()
    covidData.then((res) => {
      setAllCovidData(res)
    })
  }, [])

  useEffect(() => {
    let cases = 0
    let confirmed = 0
    let deaths = 0
    let recovered = 0

    allCovidData.forEach((obj) => {
      cases += obj.cases
      confirmed += obj.confirmed
      deaths += obj.deaths
      recovered += obj.recovered
    })

    setHeaderCovidData({
      country: 'Mundo',
      cases: cases,
      confirmed: confirmed,
      deaths: deaths,
      recovered: recovered,
      updated_at: allCovidData[0] ? allCovidData[0].updated_at : '',
      updateChart: () => {},
    })

    if (allCovidData[0]) setIsLoaded(true)
  }, [allCovidData])

  return (
    <>
      <Header
        mainTitle={'Mundo'}
        casesTitle={'😷 Casos Ativos'}
        deathsTitle={'☠️ Mortes'}
        confirmedTitle={'🟥 Total'}
        recoveredTitle={'😅 Recuperados'}
        updatedAtTitle={'Atualizado em'}
        mainData={headerCovidData}
        isLoaded={isLoaded}
      />
      <CountriesTable
        locationTitle={'Países'}
        tableTitle={'Casos no Mundo'}
        confirmedTitle={'Total'}
        casesTitle={'Ativos'}
        recoveredTitle={'Curados'}
        deathsTitle={'Mortes'}
        covidData={allCovidData}
      />
    </>
  )
}

export default World
