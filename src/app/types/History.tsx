export interface HistoryRecord {
    numberOfPeople: number,
    date: string
    averageAttentionSpan: number,
    meetingLengthInMinutes: number
}

const MockHistoryRecords: HistoryRecord[] = [
    {
        numberOfPeople: 10,
        date: '2019-07-30T08:21',
        averageAttentionSpan: 0.3,
        meetingLengthInMinutes: 30
    },
    {
        numberOfPeople: 20,
        date: '2019-07-31T08:21',
        averageAttentionSpan: 0.5,
        meetingLengthInMinutes: 25
    },
    {
        numberOfPeople: 22,
        date: '2019-07-31T08:21',
        averageAttentionSpan: 0.4,
        meetingLengthInMinutes: 25
    },
    {
        numberOfPeople: 20,
        date: '2019-07-31T08:21',
        averageAttentionSpan: 0.9,
        meetingLengthInMinutes: 40
    },
    {
        numberOfPeople: 28,
        date: '2019-07-31T08:21',
        averageAttentionSpan: 0.3,
        meetingLengthInMinutes: 21
    }
]

export {MockHistoryRecords}
