import React, { useEffect, useState } from 'react';
import { getCasesBrazilStates } from '../../controllers/CovidController';

// Importando Interfaces
import { StateData } from '../../interfaces/StateData';

// Importando Estilos
import './styles.css';

const Home: React.FC = () => {

    const [brazilStatesCases, setBrazilStatesCases] = useState<StateData[]>([]);

    useEffect(() => {
        var teste = getCasesBrazilStates();
        teste.then((res) => {
            setBrazilStatesCases(res);
        });
    }, []);

    return (
        <ul>
            {
                brazilStatesCases.map(obj => {
                    return <li>{obj.state}</li>
                })
            }
        </ul>
    )
}

export default Home;