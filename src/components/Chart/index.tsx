import React from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';

import { ChartData } from '../../interfaces/ChartData';

import './styles.sass';

const Chart: React.FC<ChartData> = (props) => {
    
    const options = {
        colorSet: "customColorSet1",
        theme: "dark2",
        title: {
            text: "Casos de Covid-19"
        },
        data: [
        {
            type: "column",
            dataPoints: [
                { label: "Confirmados",  y: props.cases },
                { label: "Mortes", y: props.deaths },
                { label: "Suspeitos", y: props.suspects },
            ]
        }
        ]
    }

    return(
        <>
            <div className="chart-title">
                <img alt={props.uf + ' Flag'} src={'https://devarthurribeiro.github.io//covid19-brazil-api/static/flags/' + props.uf + '.png'}/>
                <h1>{props.state} ({props.uf})</h1>
            </div>
            <CanvasJSChart options = {options}/>
        </>
    )
}

export default Chart;