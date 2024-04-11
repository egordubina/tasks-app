import { fetchUserById } from '../../../lib/data'

export default async function UserWrapper() {
	const user = await fetchUserById(0)
	return <h1 className='text-2xl font-bold'>Welcome, {user.name}</h1>
}
