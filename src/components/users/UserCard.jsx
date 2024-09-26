import { Link } from 'react-router-dom'


export default function UserCard({ user }) {

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-64 object-cover" src={user.image} alt={user.firstName} />
            <div className="p-6">
                <h2 className="text-xl font-bold">{user.firstName} {user.lastName}</h2>
                <p className="text-gray-700">{user.email}</p>
                <p className="text-gray-700">{user.gender}</p>
                <div className="mt-4 flex justify-between">
                    <Link to={`/users/${user.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View</Link>
                </div>
            </div>
        </div>
    )
}
