import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'


export default function User() {
  const [user, setUser] = useState(null);

  const { id } = useParams();


  useEffect(() => {

    fnc_get_user()

  }, [])

  const user_api = 'https://dummyjson.com/users/' + id;

  const fnc_get_user = async () => {
    const res = await fetch(user_api);

    const data = await res.json();

    if (res.status === 200) {
      setUser(data);
    } else {
      setUser(false);
    }
  }

  // If Null = Not yet fetched
  if (user === null) {
    return <span>Loading...</span>
  }


  // If Fasle = 404 (User not found)
  if (user === false) {
    return <div className='p-4 bg-red-400 text-red-900 text-center'>User not found</div>
  }


  // If User found

  return (
    <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{user.firstName} {user.lastname}</h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
            <div className="flex items-center md:space-x-2">

              <p className="text-sm uppercase">{user.bloodGroup}</p>
            </div>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">4 min read • {user.email} reviews</p>
          </div>
        </div>

        <div>
          <img src={user.image} alt="" />
        </div>


        <div className="dark:text-gray-800">
          <p>{user.age}</p>
        </div>
      </article>
       
    </div>
  )
}
