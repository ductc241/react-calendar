interface IEvent {
    title: string;
    description?: string
    start_date: string;
    end_date: string;
    label: "yellow" | "blue" | "red"
}

export default IEvent