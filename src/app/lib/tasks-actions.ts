'use server'

import { tasks } from "./placeholder-data"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function setDoneTask(id: number) {
    tasks[id].done = true
    revalidatePath('/tasks')
}