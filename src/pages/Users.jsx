import UserCard from "../components/users/UserCard";


const users_api = 'https://dummyjson.com/users';

// console.log(users_api);

const res = await fetch(users_api);

// console.log(res);

const { users } = await res.json();

// console.log(users);


export default function Users() {
    return (
        <div>

            <h1 className="text-center text-6xl my-3 uppercase font-extrabold">users</h1>

            <div className="flex flex-wrap gap-8 justify-center">

                {
                    users.map(user =>
                        <UserCard key={user.id} user={user} />
                    )

                }
            </div>
        </div>
    )
}
