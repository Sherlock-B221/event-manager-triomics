export interface IActivity {
    id: number;
    name: string;
    description: string;
}

export interface IEvents {
    id: string;
    name: string;
    description: string;
    activities: IActivity[];
}