import CustomCard from "../../component/CustomCard/CustomCard";
import {Container} from "@mui/material";
import {Phrase} from "../../types/Phrase";
import StepCard from "../../component/ChartCard/StepCard";
import ContentCard from "../../component/ContentCard/ContentCard";

const phrases: Phrase[] = [
    {content: 'Lorem Ipsum akwdnaoubwduoabnwdoia.'},
    {content: 'Lorem Ipsum akwdnaoubwduoabnwdoia.'},
    {content: 'Lorem Ipsum akwdnaoubwduoabnwdoia.'},
    {content: 'Lorem Ipsum akwdnaoubwduoabnwdoia.'},
    {content: 'Lorem Ipsum akwdnaoubwduoabnwdoia.'},
    {content: 'Lorem Ipsum akwdnaoubwduoabnwdoia.'},
    {content: 'Lorem Ipsum akwdnaoubwduoabnwdoia.'},
    {content: 'Lorem Ipsum akwdnaoubwduoabnwdoia.'},
    {content: 'Lorem Ipsum akwdnaoubwduoabnwdoia.'},
    {content: 'Lorem Ipsum akwdnaoubwduoabnwdoia.'},
    {content: 'Lorem Ipsum akwdnaoubwduoabnwdoia.'},
    {content: 'Lorem Ipsum akwdnaoubwduoabnwdoia.'},
    {content: 'Lorem Ipsum akwdnaoubwduoabnwdoia.'},
    {content: 'Lorem Ipsum akwdnaoubwduoabnwdoia.'},
]

export default function Meeting() {
    return <Container sx={{
        display: 'flex',
        gap: '5%'
    }}>
        <ContentCard header="default"
                    phrases={[...phrases, ...phrases, ...phrases, ...phrases]}
                    sx={{ flex: 1, overflow: 'auto', maxHeight: '80vh'}}
        />

        <Container sx={{display: 'flex', flexDirection: 'column', flex: 1, gap: '5vh'}}>
            <StepCard sx={{flex: 1}} />

            <StepCard sx={{flex: 1}} />
        </Container>

    </Container>
}
