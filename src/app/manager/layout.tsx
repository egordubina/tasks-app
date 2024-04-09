import NavBar from '@/app/ui/navigation/NavBar'
import Search from '@/app/ui/search/Search'
import Profile from '@/app/ui/profile/Profile'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col md:flex-row gap-4 md:p-4">
      <NavBar />
      <div className="flex flex-col w-full gap-4">
        <div className="flex gap-2 sm:gap-4 items-center justify-between mx-2 sm:mx-0">
          <Search />
          <Profile />
        </div>
        {children}
      </div>
    </section>
  )
}
