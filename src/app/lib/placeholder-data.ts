import type { Task, People } from './types'

export const tasks: Task[] = [
  {
    id: 1,
    title: 'Task 1',
    priority: 'low',
    done: false,
    pin: false,
  },
  {
    id: 2,
    title: 'Task 2',
    priority: 'medium',
    done: false,
    pin: true,
  },
  {
    id: 3,
    title: 'Task 3',
    priority: 'high',
    done: false,
    pin: true,
  },
]

export const peoples: People[] = [
  {
    id: 0,
    name: 'Mi Joon',
    status: 'online',
    subtitle: 'Work and Work'
  }
]