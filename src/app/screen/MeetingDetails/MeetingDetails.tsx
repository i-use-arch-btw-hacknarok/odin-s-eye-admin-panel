import {Container} from "@mui/material";
import {Phrase, MockPhrases} from "../../types/Phrase";
import StepCard from "../../component/Card/ChartCard/StepCard";
import ContentCard from "../../component/Card/ContentCard/ContentCard";
import {useEffect, useState} from "react";
import {HistoryRecord, MockHistoryRecords} from "../../types/History";
import HistoryCard from "../../component/Card/HistoryCard/HistoryCard";
import {useParams} from "react-router-dom";

// @ts-ignore
export default function MeetingDetails({conference}) {
    const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
    const phrases: Phrase[] = MockPhrases;
    const history: HistoryRecord[] = MockHistoryRecords;


    const onHover = (itemIndex: number | null) => {
        setSelectedItemIndex(itemIndex);
    }

    const parse = () => {
        let chunkSize = conference.Video.Engagement.length / conference.Video.Transcription.length;
        let phrasesTmp = []
        console.log(chunkSize)
        for (let i = 0, j=0; i < conference.Video.Engagement.length && j < conference.Video.Transcription.length; i += chunkSize, j++) {
            const chunk = conference.Video.Engagement.slice(i, i + chunkSize);
            let sum = 0;

            console.log(conference.Video.Engagement[parseInt(String(i))]);
            console.log(conference.Video.Transcription[parseInt(String(j))]);

            // @ts-ignore
            chunk.forEach(record => {
                sum += record.engagementPercentage;
            })

            let avg = sum / chunk.length;
            phrasesTmp.push({content: conference.Video.Transcription[parseInt(String(j))].text, focusPercentage: avg, timestamp: conference.Video.Transcription[parseInt(String(j))].createdAt})
            console.log(phrasesTmp);
        }
        return phrasesTmp;
    }

    const resetHoverState = () => {
        setSelectedItemIndex(null);
    };

    const bozedziala = parse();

    return <Container sx={{
        display: 'flex',
        gap: '5%'
    }}>
        <ContentCard header="Transcriptions"
                     conference={bozedziala}
                     sx={{flex: 1, overflow: 'auto', maxHeight: '70vh'}}
                     selectedItemIndex={selectedItemIndex}
        />

        <Container sx={{display: 'flex', flexDirection: 'column', flex: 1, gap: '5vh'}}>
            <StepCard sx={{flex: 1, backgroundColor: '#23242A'}} phrases={bozedziala} onHover={onHover} onMouseLeave={resetHoverState} />
            <HistoryCard sx={{flex: 1, backgroundColor: '#23242A'}} history={history} />
        </Container>

    </Container>
}
