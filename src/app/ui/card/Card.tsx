export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-neutral-50 shadow p-4 rounded-2xl w-1/2 md:w-1/4">
      {children}
    </div>
  )
}
