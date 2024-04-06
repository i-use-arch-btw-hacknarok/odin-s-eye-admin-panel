import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import CustomCard from "../CustomCard/CustomCard";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface StepChartProps {
    sx: any
}

const StepChart: React.FC<StepChartProps> = ({sx}: StepChartProps) => {

    return <CustomCard sx={sx}>
        <Line options={options} data={data} />;
    </CustomCard>
};

const options = {
    responsive: true,
    interaction: {
        mode: 'index' as const,
        intersect: false,
    },
    plugins: {
        legend: {
            position: 'top' as const,
            labels: {
                color: 'white'
            }
        },
        title: {
            display: true,
            text: 'Phrases to time focus',
            color: 'white'
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                color: 'white'
            }
        },
        x: {
            ticks: {
                color: 'white'
            }
        }
    },
    elements: {
        line: {
            tension: 0,
            stepped: true,
            borderColor: 'blue',
            borderWidth: 3
        },
        point: {
            radius: 0
        }
    },
};

const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
        {
            label: 'Product 1',
            data: [-60, -20, 0, -40, 40, 80],
            fill: false,
            borderColor: 'blue',
            backgroundColor: 'blue',
        },
    ],
};
export default StepChart;
