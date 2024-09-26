import { useState, useRef, useEffect } from "react";

import { useDispatch } from "react-redux"
import { rdx_set_show_modal } from "../../redux/settingSlice"
import { rdx_login } from "../../redux/userSlice";

// react-toastify
import { toast } from "react-toastify";

// Loading
import LoadingInline from "../LoadingInline";

export default function Login() {

  const [isLoading, setIsloading] = useState(false);
  const [remember, setRemember] = useState(false);



  const username_ref = useRef();
  const password_ref = useRef();

  // console.log('Login component rendered')






  const dispatch = useDispatch();


  const handle_login = async () => {
    const username = username_ref.current.value
    const password = password_ref.current.value


    if (username === '' || password === '') {

      toast.error('All fields are required', {
        position: 'bottom-right',
        autoClose: 20000,
        closeOnClick: false,
        theme: 'light'
      });

      return;
    }

    try {
      setIsloading(true)

      // fetch API

      const api = 'https://dummyjson.com/auth/login'


      const login_data = {
        username, password
      }
      // // console.log(login_data)

      const jsonData = JSON.stringify(login_data)
      // // console.log(jsonData)
      // // console.log(typeof jsonData)


      // return

      const init = {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: jsonData
      }

      const res = await fetch(api, init);

      // console.log(res);

      const data = await res.json();
      // console.log('data', data);

      if (res.status === 400) {
        toast.error(data.message)
        return
      }

      //------ Valid login data -----//


      // Add userdata to redux
      dispatch(rdx_login(data))



      // Add userdata to storage

      const json_data = JSON.stringify(data)
      if (remember) {
        localStorage.loggedInUserData = json_data;
      } else {
        sessionStorage.loggedInUserData = json_data;
      }



      // hide login form
      dispatch(rdx_set_show_modal(null));

      // console.log(data);

    } catch (error) {

      toast.error('Somthing went wring, please reload the page and try again.')
    } finally {
      setIsloading(false)
    }

    return


  }

  // console.log(username_ref)

  useEffect(() => {
    username_ref.current.focus();
  }, [])


  window.addEventListener('keypress', e => {
    if (e.key === 'Enter') handle_login()
  })


  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign in to your account
        </h1>
        <span onClick={() => dispatch(rdx_set_show_modal(null))} className="cursor-pointer p-3 text-red-600 hover:text-red-900 text-3xl">&times;</span>
      </div>

      {/* Form */}
      <div className="space-y-4 md:space-y-6 overflow-auto"  >
        {/* username */}
        <div>
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
          <input ref={username_ref} value={'emilys'} type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input value={'emilyspass'} ref={password_ref} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>

        {/* Remember and Forget */}
        <div className="flex items-center justify-between">
          {/* Remember */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input onClick={() => setRemember(prev => !prev)} id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
            </div>
          </div>

          {/* Forget */}
          <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
        </div>

        {/* Login */}
        <div className="text-center">

          {
            isLoading ?
              <LoadingInline />
              :
              <button onClick={handle_login} type="submit" className=" w-full text-sky-800 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"  >
                Sign in
              </button>
          }
        </div>

        {/* Sign Up */}
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet? <span onClick={() => dispatch(rdx_set_show_modal('register'))} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</span>
        </p>
      </div>

    </>
  )
}