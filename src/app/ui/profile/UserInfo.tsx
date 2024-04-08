import { fetchUserById } from '@/app/lib/data'

export default async function UserInfo() {
  const user = await fetchUserById(0)
  return (
    <>
      <h1 className="text-center w-full text-lg font-bold">{user?.name}</h1>
      <p className="text-center text-sm w-full text-neutral-500">
        {user?.subtitle}
      </p>
    </>
  )
}
