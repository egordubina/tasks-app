'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Home() {
  const router = useRouter()
  const [isShowRegisterDialog, setShowRegisterDialog] = useState(false)
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex w-3/6 items-center justify-center">
        <h1 className='text-2xl font-bold'>Welcome to best in the world task manager</h1>
      </div>
      <div className="flex w-3/6 items-center justify-center">
        <div className="flex gap-4">
          <button className='border-blue-400 border-4 rounded-2xl text-blue-400 py-4 px-8 font-bold' onClick={() => router.push('/manager/dashboard')}>Sign in</button>
          <button className='bg-blue-400 rounded-2xl text-white py-4 px-8 font-bold'>Sign up</button>
        </div>
      </div>
    </main>
  )
}
