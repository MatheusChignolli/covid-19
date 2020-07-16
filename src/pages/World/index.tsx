import React, { useEffect, useState } from 'react';
import { getCountriesCases } from '../../controllers/CovidController';

// Important Componentes
import CountriesTable from '../../components/CountriesTable';

// Importando Interfaces
import { CountriesCovidData } from '../../interfaces/CountriesCovidData';

// Importando Estilos
import './styles.sass';

const World: React.FC = () => {

    const [allCovidData, setAllCovidaData] = useState<CountriesCovidData[]>([]);

    useEffect(() => {
        var covidData = getCountriesCases();
        covidData.then((res) => {
            setAllCovidaData(res);
        });
    }, []);

    return(            
        <CountriesTable
            locationTitle={'Países'}
            tableTitle={'Casos no Mundo'}
            confirmedTitle={'Total'}
            casesTitle={'Ativos'}
            recoveredTitle={'Curados'}
            deathsTitle={'Mortes'}
            covidData={allCovidData}
        />
    )
}

export default World;