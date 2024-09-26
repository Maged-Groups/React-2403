import { useState, useMemo } from "react"

// redux
import { useDispatch } from "react-redux"
import { rdx_set_show_modal } from "../../redux/settingSlice"

export default function Register() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');


  const dispatch = useDispatch();

  // console.log('Register Component Rendered');



  // First Name
  const handle_firstname_change = (e) => {

    const text = e.target.value;

    if (text.length >= 21) {
      return
    }

    setFirstName(text);
  }

  const FirstnameValidator = () => {

    // console.log('FirstnameValidator Component rendered')

    const len = firstName.length;

    if (len === 0) {
      return <span className="text-sky-600">First name between 3 and 20 letters</span>
    }

    if (len < 3) {
      return <span className="text-red-600">First name should exceed 3 letters</span>
    }

    if (len > 20) {
      return <span className="text-red-600">First name should not exceed 20 letters</span>
    }

    return <span className="text-green-600">First name accepted</span>
  }

  // Last Name
  const handle_lastname_change = (e) => {
    const text = e.target.value;

    if (text.length < 21) setLastName(text)

  }

  const LastnameValidator = () => {

    // console.log('LastnameValidator Component rendered')

    const len = lastName.length;

    if (len === 0) {
      return <span className="text-sky-600">Last name between 3 and 20 letters</span>
    }

    if (len < 3) {
      return <span className="text-red-600">Last name should exceed 3 letters</span>
    }

    if (len > 20) {
      return <span className="text-red-600">Last name should not exceed 20 letters</span>
    }

    return <span className="text-green-600">Last name accepted</span>
  }

  // Mobile
  const handle_mobile_change = e => {
    const text = e.target.value;

    if (text.length < 12) setMobile(text)
  }

  const MobileValidator = () => {

    // console.log('MobileValidator Component rendered');

    if (mobile.length === 0) return <span className="text-sky-600">01######### (11)</span>

    if (mobile.length !== 11) return <span className="text-red-600">Mobile accepts 11 numbers only</span>

    if (mobile.substring(0, 2) !== '01') return <span className="text-red-600">Mobile Number is not valid</span>

    return <span className="text-green-600">Mobile Number is valid</span>
  }


  const validate_firstName = useMemo(FirstnameValidator, [firstName]);

  const validate_lastname = useMemo(LastnameValidator, [lastName]);

  const validate_mobile = useMemo(MobileValidator, [mobile]);


  return (
    <>
      {/* Header */}
      <div className="h-1/12 flex justify-between items-center">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Create a new account
        </h1>
        <span onClick={() => dispatch(rdx_set_show_modal(null))} className="cursor-pointer p-3 text-red-600 hover:text-red-900 text-3xl">&times;</span>
      </div>

      {/* Body */}
      <div className="h-8/12 overflow-auto space-y-4 md:space-y-6" action="#">

        {/* First Name */}
        <div>
          <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
          <input autoComplete="off" value={firstName} onChange={handle_firstname_change} type="text" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" />
          <p className="flex justify-between text-xs">
            {validate_firstName}
            <span>{firstName.length}/20</span>
          </p>
        </div>


        {/* Last Name */}
        <div>
          <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
          <input autoComplete="false" value={lastName} onChange={handle_lastname_change} type="text" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" />
          <p className="flex justify-between text-xs">
            {validate_lastname}
            <span>{lastName.length}/20</span>
          </p>
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile</label>
          <input value={mobile} onChange={handle_mobile_change} type="text" id="mobile" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mobile" />
          <p className="flex justify-between text-xs">
            {validate_mobile}
            <span>{mobile.length}/20</span>
          </p>
        </div>


        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> email</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>

        {/* password Confirmation */}
        <div>
          <label htmlFor="password_confirmation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
          <input type="password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
          </div>

          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="h-1/12">

        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account? <span onClick={() => dispatch(rdx_set_show_modal('login'))} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</span>
        </p>
      </div>

    </>
  )
}