import React, { createContext, useContext, useState , useEffect } from 'react';
import { Task } from '../Types/Task';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TASKS_STORAGE_KEY = '@tasks';


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
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
  updateTaskStatus: (id: string, status: Task['status']) => void;
  removeTask: (id: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

const today = new Date().toISOString().split('T')[0];

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>(today);

  

  // 🔹 Load tasks on app start
  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
  try {
    const storedTasks = await AsyncStorage.getItem(TASKS_STORAGE_KEY);

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    } else {
      setTasks(DEFAULT_TASKS);
      await AsyncStorage.setItem(
        TASKS_STORAGE_KEY,
        JSON.stringify(DEFAULT_TASKS)
      );
    }
  } catch (error) {
    console.log('Failed to load tasks', error);
    setTasks(DEFAULT_TASKS);
  }
};

  // 🔹 Save tasks whenever they change
  useEffect(() => {
    if (tasks.length > 0) {
      AsyncStorage.setItem(
        TASKS_STORAGE_KEY,
        JSON.stringify(tasks)
      ).catch(err => console.log('Failed to save tasks', err));
    }
  }, [tasks]);



 const addTask = (task: Omit<Task, 'id' | 'createdAt'>) => {
  const newTask: Task = {
    ...task,
    id: Date.now().toString(),
    createdAt: Date.now(),
  };

  setTasks(prev => [...prev, newTask]);
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
      value={{ tasks, addTask, updateTaskStatus, removeTask , selectedDate, setSelectedDate }}
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
