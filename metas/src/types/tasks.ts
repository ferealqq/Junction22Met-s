export interface Task {
    id: string;
    title: string;
    desc: string;
    emission: number;
    created_at: Date;
    updated_at: Date;
}

export interface TaskActivity {
    task_id: string;
    ends_at: Date;
    starts_at: Date;
    id: string;
    emissions_saved: number;
    money_saved: number;
    created_at: Date;
    updated_at: Date;
    task: Task;
}