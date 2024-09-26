import { BsCart3 } from "react-icons/bs";

import { Link, useNavigate } from 'react-router-dom'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { rdx_set_show_modal } from '../redux/settingSlice'
import { rdx_logout } from "../redux/userSlice";

export default function TopNav() {

  const { cartSlice: { cart_items }, userSlice: { loggedin } } = useSelector(store => store);

  // const { cart_items } = store.cartSlice;
  // const { loggedin } = store.userSlice;

  // console.log('cart_items', cart_items)


  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handle_logout = () => {
    dispatch(rdx_logout());
    window.location.reload();
    navigate('/')
  }

  return (
    <nav className='p-3 bg-gray-900 text-gray-100 flex justify-between gap-4 sticky top-0'>
      <div className='flex gap-3'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/products'>Products</Link>
        {loggedin && <Link to='/users'>Users</Link>}
      </div>


      {/* Right */}
      <div className="flex gap-4">

        <span className="relative">
          <BsCart3 size={30} className="cursor-pointer text-sky-700" />
          <span className="text-xs absolute -top-[8px] -right-[8px] origin-right rounded-full w-5 h-5 flex justify-center items-center bg-sky-100 text-sky-800">{cart_items.length}</span>
        </span>

        {/* Buttons */}
        <div className="flex gap-2">
          {
            loggedin ?
              <button onClick={handle_logout} className="px-3 py-1 rounded-md border">Logout</button>
              :
              <>
                <button onClick={() => dispatch(rdx_set_show_modal('login'))} className="px-3 py-1 rounded-md border">Login</button>
                <button onClick={() => dispatch(rdx_set_show_modal('register'))} className="px-3 py-1 rounded-md border">Register</button>
              </>
          }
        </div>

      </div>
    </nav>
  )
}
