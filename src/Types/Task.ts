export type TaskStatus = 'current' | 'upcoming' | 'completed';

export interface Task {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  status: TaskStatus;
  createdAt: number;
  
}
