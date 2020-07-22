import React, { useEffect, useState } from 'react';
import { getBrazilStatesCases, getBrazilCases } from '../../controllers/CovidController';

// Important Componentes
import Table from '../../components/Table';
import Header from '../../components/Header';

// Importando Interfaces
import { CovidData } from '../../interfaces/CovidData';
import { CountriesCovidData } from '../../interfaces/CountriesCovidData';

// Importando Estilos
import './styles.sass';

const Home: React.FC = () => {

    const [allCovidData, setAllCovidaData] = useState<CovidData[]>([]);
    const [brazilCovidData, setBrazilCovidData] = useState<CountriesCovidData | undefined>();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        var covidData = getBrazilStatesCases();
        covidData.then((res) => {
            setAllCovidaData(res);
            setIsLoaded(true);
        });
    }, []);

    useEffect(() => {
        var brazilCovidData = getBrazilCases();
        brazilCovidData.then((res) => {
            setBrazilCovidData(res);
            setIsLoaded(true);
        })
    }, [])

    return (
        <>
            <Header
                mainTitle={'Brasil'}
                casesTitle={'😷 Casos Ativos'}
                deathsTitle={'☠️ Mortes'}
                confirmedTitle={'🟥 Total'}
                recoveredTitle={'😅 Recuperados'}
                updatedAtTitle={'Atualizado em'}
                mainData={brazilCovidData}
                isLoaded={isLoaded}
            />
            <Table 
                tableTitle={'Estados Brasileiros'}
                casesTitle={'Confirmados'}
                deathsTitle={'Mortes'}
                locationTitle={'Estados (UF)'}
                suspectsTitle={'Suspeitos'}
                covidData={allCovidData}
            />
        </>
    )
}

export default Home;