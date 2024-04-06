import {
    Card,
    CardContent,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import SearchBar from "../../component/SearchBar/SearchBar";
import React, {useState} from "react";

interface Meeting {
    id: string;
    topic: string;
    date: string;
    attendees: number;
}

const initialMeetings: Meeting[] = [
    {
        id: "1",
        topic: 'Uwu',
        date: '2024:08:09T09:08:12',
        attendees: 12
    },
    {
        id: "2",
        topic: 'UwuMachine',
        date: '2024:08:09T09:08:12',
        attendees: 12
    },
    {
        id: "3",
        topic: 'Czapa ',
        date: '2024:08:09T09:08:12',
        attendees: 12
    }
];

const Recordings = () => {

    const [meetings, setMeetings] = useState<Meeting[]>(initialMeetings);
    const [filteredMeetings, setFilteredMeetings] = useState<Meeting[]>(initialMeetings);
    const [lastSearchSize, setLastSearchSize] = useState<number>(0);

    const handleSearch = (searchQuery: string) => {
        if(searchQuery.length < lastSearchSize) {
            setLastSearchSize(searchQuery.length);
            setFilteredMeetings(meetings);
            return;
        }

        if (!searchQuery) {
            setFilteredMeetings(meetings);
        } else {
            const lowercasedQuery = searchQuery.toLowerCase();
            const filteredData = meetings.filter((meeting) =>
                meeting.topic.toLowerCase().includes(lowercasedQuery) ||
                meeting.date.includes(searchQuery)
            );
            setFilteredMeetings(filteredData);
        }
    };

    const handleSort = (sortValue: string) => {
        const sortedMeetings = [...meetings].sort((a, b) => {
            if (sortValue === 'name') {
                return a.topic.localeCompare(b.topic);
            } else if (sortValue === 'date') {
                return new Date(a.date).getTime() - new Date(b.date).getTime();
            }
            return 0;
        });
        setFilteredMeetings(sortedMeetings);
    };

    const handleFilter = (filterValue: string) => {
        let filteredData = meetings;
        if (filterValue === 'large') {
            filteredData = meetings.filter((meeting) => meeting.attendees > 50);
        } else if (filterValue === 'small') {
            filteredData = meetings.filter((meeting) => meeting.attendees <= 50);
        }

        setFilteredMeetings(filteredData);
    };

    return <Card>
        <CardContent>
            <SearchBar onSearch={handleSearch} onSort={handleSort} onFilter={handleFilter}/>
            <TableContainer component={Paper}>
            <Table sx={{color: 'white'}}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{color: 'white'}}>Topic</TableCell>
                        <TableCell sx={{color: 'white'}}>Date</TableCell>
                        <TableCell sx={{color: 'white'}}>Attendees</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredMeetings.map((meeting) => (
                        <TableRow key={meeting.id}>
                            <TableCell sx={{color: 'white'}}>{meeting.topic}</TableCell>
                            <TableCell sx={{color: 'white'}}>{meeting.date}</TableCell>
                            <TableCell sx={{color: 'white'}}>{meeting.attendees}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </CardContent>
    </Card>
}

export default Recordings;
