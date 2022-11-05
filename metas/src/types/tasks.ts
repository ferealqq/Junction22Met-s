export interface Task {
    id: string;
    title: string;
    desc: string;
    emission: number;
    created_at: Date;
    updated_at: Date;
}

export interface TaskActivity {
    id: string;
    starts_at: Date;
    ends_at: Date;
    created_at: Date;
    updated_at: Date;
}