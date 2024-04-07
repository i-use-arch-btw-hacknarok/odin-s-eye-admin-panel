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
import {Line} from 'react-chartjs-2';
import CustomCard from "../CustomCard/CustomCard";
import {Phrase} from "../../../types/Phrase";
import {Paper} from "@mui/material";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface ChardChartProps {
    sx: any
    phrases: Phrase[],
    onHover?: (itemIndex: number) => void,
    onMouseLeave?: () => void
}

const ChartCard: React.FC<ChardChartProps> = ({phrases, sx, onHover, onMouseLeave}: ChardChartProps) => {
    const options = {
        responsive: true,
        interaction: {
            mode: 'index' as const,
            intersect: false,
        },
        onHover: (event: any, chartElement: any) => {
            const itemIndex = chartElement.length > 0 ? chartElement[0].index : null;
            if (onHover) {
                onHover(itemIndex);
            }
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
                text: 'Phrases to time focus in minutes',
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
                borderColor: 'green',
                borderWidth: 3
            },
            point: {
                radius: 0
            }
        },
    };

    const data = {
        labels: phrases.map((phrase, index) => index),
        datasets: [
            {
                label: 'Average focus time span in minutes',
                data: phrases.map(phrase => phrase.focusPercentage),
                fill: false,
                borderColor: 'green',
                backgroundColor: 'green',
            },
        ],
    };

    return <CustomCard sx={sx}>
        <Paper elevation={3} sx={{
            backgroundColor: '#23242A',
            color: 'white',
            borderRadius: '12px',
            boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.1)'
        }}>
            <Line options={options} data={data} onMouseLeave={onMouseLeave}/>
        </Paper>
    </CustomCard>
};
export default ChartCard;
