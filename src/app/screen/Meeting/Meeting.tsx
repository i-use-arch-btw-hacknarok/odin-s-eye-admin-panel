import {Container} from "@mui/material";
import {Phrase, MockPhrases} from "../../types/Phrase";
import StepCard from "../../component/Card/ChartCard/StepCard";
import ContentCard from "../../component/Card/ContentCard/ContentCard";
import {useState} from "react";
import {HistoryRecord, MockHistoryRecords} from "../../types/History";

export default function Meeting() {
    const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
    const phrases: Phrase[] = MockPhrases;
    const history: HistoryRecord[] = MockHistoryRecords;

    const onHover = (itemIndex: number | null) => {
        setSelectedItemIndex(itemIndex);
    }

    const resetHoverState = () => {
        setSelectedItemIndex(null);
    };

    return <Container sx={{
        display: 'flex',
        gap: '5%'
    }}>
        <ContentCard header="default"
                     phrases={[...phrases, ...phrases]}
                     sx={{flex: 1, overflow: 'auto', maxHeight: '80vh'}}
                     selectedItemIndex={selectedItemIndex}
        />

        <Container sx={{display: 'flex', flexDirection: 'column', flex: 1, gap: '5vh'}}>
            <StepCard sx={{flex: 1}} phrases={phrases} onHover={onHover} onMouseLeave={resetHoverState} />
            <StepCard sx={{flex: 1}} phrases={phrases} />
        </Container>

    </Container>
}
