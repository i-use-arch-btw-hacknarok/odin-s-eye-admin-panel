import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {HistoryRecord, MockHistoryRecords} from "../../../types/History";
import CustomCard from "../CustomCard/CustomCard";
import {Phrase} from "../../../types/Phrase";
import {Paper} from "@mui/material";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

interface Props {
    sx: any
    history: HistoryRecord[],
}


const HistoryCard = ({sx, history}: Props) => {
    const labels = history.map(record => new Date(record.date).toLocaleDateString());
    const numberOfPeopleData = history.map(record => record.numberOfPeople);
    const averageAttentionSpanData = history.map(record => record.averageAttentionSpan);
    const meetingLengthData = history.map(record => record.meetingLengthInMinutes);

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Number of People',
                data: numberOfPeopleData,
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgb(255, 99, 132)',
            },
            {
                label: 'Average Attention Span',
                data: averageAttentionSpanData,
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgb(54, 162, 235)',
            },
            {
                label: 'Meeting Length in Minutes',
                data: meetingLengthData,
                fill: true,
                backgroundColor: 'rgba(255, 206, 86, 0.5)',
                borderColor: 'rgb(255, 206, 86)',
            }
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true
            }
        }
    };

    return <CustomCard sx={sx}>
        <Paper elevation={3} sx={{
            backgroundColor: '#23242A',
            color: 'white',
            borderRadius: '12px',
            boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.1)'
        }}>
            <Line options={options} data={data}/>
        </Paper>
    </CustomCard>;
}

export default HistoryCard;
