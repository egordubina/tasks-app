import NavBar from '@/app/ui/navigation/NavBar'
import React from 'react'

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="h-screen flex flex-col gap-4">
      <NavBar />
      <div className="flex justify-center">
        <div className="flex flex-col w-full max-w-screen-xl">
          {children}
        </div>
      </div>
    </section>
  )
}

