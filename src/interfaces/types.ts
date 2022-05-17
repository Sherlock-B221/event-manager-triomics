export interface IActivity {
    id: number;
    name: string;
    description: string;
}

export interface IEvent {
    id: string;
    name: string;
    description: string;
    activities: IActivity[];
}