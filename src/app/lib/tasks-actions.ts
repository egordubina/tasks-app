'use server'

import { revalidatePath } from 'next/cache'

export async function setDoneTask(id: number) {
  await fetch(`http://192.168.3.23:8080/tasks/${id}`, {
    method: 'POST'
  })
  revalidatePath('/dashboard')
}
