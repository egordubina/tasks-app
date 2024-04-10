export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-neutral-50 shadow p-2 md:p-4 rounded-xl md:rounded-2xl flex flex-col gap-2 sm:gap-3 md:gap-4 w-full">
      {children}
    </div>
  )
}
