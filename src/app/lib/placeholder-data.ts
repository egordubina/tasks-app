import type { Task, User, Project } from './types'

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

export const users: User[] = [
  {
    id: 0,
    name: 'Mi Joon',
    status: 'online',
    subtitle: 'Work and Work'
  }
]

export const projects: Project[] = [
  {
    id: 0,
    name: 'Project name',
    description: null,
    tasksIds: [1, 2],
    usersIds: [0]
  }
]