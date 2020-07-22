import React, { useEffect, useState } from 'react';
import { getCountriesCases } from '../../controllers/CovidController';

// Important Componentes
import CountriesTable from '../../components/CountriesTable';
import Header from '../../components/Header';

// Importando Interfaces
import { CountriesCovidData } from '../../interfaces/CountriesCovidData';

// Importando Estilos
import './styles.sass';

const World: React.FC = () => {

    const [allCovidData, setAllCovidaData] = useState<CountriesCovidData[]>([]);
    const [headerCovidData, setHeaderCovidData] = useState<CountriesCovidData | undefined>();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        var covidData = getCountriesCases();
        covidData.then((res) => {
            setAllCovidaData(res);
        });
    }, []);

    useEffect(() => {

        var cases = 0;
        var confirmed = 0;
        var deaths = 0;
        var recovered = 0;

        allCovidData.forEach(obj => {
            cases += obj.cases;
            confirmed += obj.confirmed;
            deaths += obj.deaths;
            recovered += obj.recovered;
        });

        setHeaderCovidData({
            country: "Mundo",
            cases: cases,
            confirmed: confirmed,
            deaths: deaths,
            recovered: recovered,
            updated_at: allCovidData[0] ? allCovidData[0].updated_at : '',
            updateChart: () => {},
        });

        if(allCovidData[0]) setIsLoaded(true);
    }, [allCovidData])

    return(  
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

export default World;