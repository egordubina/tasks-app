import { fetchUserById } from "../lib/data"
import type { People } from "../lib/types"

export default async function Account() {
  const user = await fetchUserById(0)
  return (
    <div>
      <h1 className="text-4xl font-bold">Account</h1>
      <div>
        <h1 className="text-xl font-bold">{user?.name}</h1>
      </div>
    </div>
  )
}
