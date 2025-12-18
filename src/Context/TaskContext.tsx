import React, { createContext, useContext, useState } from 'react';
import { Task } from '../Types/Task';


const DEFAULT_TASKS : Task[] = [
  {
    id: '1',
    title: 'Review project requirements',
    status: 'current',
    date: new Date().toISOString().split('T')[0],
    createdAt: Date.now(),
  },
  {
    id: '2',
    title: 'Prepare weekly status update',
    status: 'current',
    date: new Date().toISOString().split('T')[0],
    createdAt: Date.now() + 1,
  },
  {
    id: '3',
    title: 'Plan next sprint tasks',
    status: 'upcoming',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    createdAt: Date.now() + 2,
  },
  {
    id: '4',
    title: 'Fix calendar UI bugs',
    status: 'completed',
    date: new Date(Date.now() - 86400000).toISOString().split('T')[0],
    createdAt: Date.now() + 3,
  },
];


interface TaskContextType {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  updateTaskStatus: (id: string, status: Task['status']) => void;
  removeTask: (id: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(DEFAULT_TASKS);

  const addTask = (task: Omit<Task, 'id' | 'createdAt'>) => {
  setTasks(prev => [
    ...prev,
    {
      ...task,
      id: Date.now().toString(),
      createdAt: Date.now(),
    },
  ]);
};


  const removeTask = (id: string) => {
  setTasks(prev => prev.filter(task => task.id !== id));
};


  const updateTaskStatus = (id: string, status: Task['status']) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, status } : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTaskStatus, removeTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used inside TaskProvider');
  }
  return context;
};
