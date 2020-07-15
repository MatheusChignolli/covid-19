import React, { useEffect, useState } from 'react';
import { getCasesBrazilStates } from '../../controllers/CovidController';

// Important Componentes
import Table from '../../components/Table';

// Importando Interfaces
import { CovidData } from '../../interfaces/CovidData';

// Importando Estilos
import './styles.css';

const Home: React.FC = () => {

    const [allCovidData, setAllCovidaData] = useState<CovidData[]>([]);

    useEffect(() => {
        var covidData = getCasesBrazilStates();
        covidData.then((res) => {
            setAllCovidaData(res);
        });
    }, []);

    return (
        <>
            <Table 
                tableTitle={'Estados Brasileiros'}
                casesTitle={'Casos'}
                deathsTitle={'Mortes'}
                locationTitle={'Estados (UF)'}
                suspectsTitle={'Suspeitos'}
                covidData={allCovidData}
            />
            <Table 
                tableTitle={'Estados Brasileiros'}
                casesTitle={'Casos'}
                deathsTitle={'Mortes'}
                locationTitle={'Estados (UF)'}
                suspectsTitle={'Suspeitos'}
                covidData={allCovidData}
            />
        </>
    )
}

export default Home;