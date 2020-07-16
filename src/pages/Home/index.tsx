import React, { useEffect, useState } from 'react';
import { getBrazilStatesCases } from '../../controllers/CovidController';

// Important Componentes
import Table from '../../components/Table';

// Importando Interfaces
import { CovidData } from '../../interfaces/CovidData';

// Importando Estilos
import './styles.sass';

const Home: React.FC = () => {

    const [allCovidData, setAllCovidaData] = useState<CovidData[]>([]);

    useEffect(() => {
        var covidData = getBrazilStatesCases();
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
        </>
    )
}

export default Home;