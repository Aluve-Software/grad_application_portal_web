import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/header";
import Message from "../components/message";
import AltAuth  from "../components/alt-auth";
import Button from "../components/button";

export default function Login() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      setError('')
      setIsLoading(true)
      const url = 'http://localhost:3000/login'
      const form = new FormData(e.target)
      const email = form.get('email')
      const password = form.get('pwd')
      const payload = { email, password }
      const response = await axios.post(url, payload)
      const data = await response.data

      if (data.isSuccess) {
        const { user } = data

        // return dispatch(AuthActions.setUser({ currentUser: user }))
      }

      setError(data.message)

    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} className="relative w-full h-80 min-h-min flex flex-col justify-center items-center gap-4">

        {/* Form Heading */}
        <Header>
          Good to see you again
        </Header>

        {/* Email Address */}
        <div className="flex flex-col w-full">
          <label className="text-sm text-gray-700" htmlFor="email">Email Address</label>
          <input className="border-gray-400 h-10 rounded-lg border-solid border-2 text-sm pl-4 outline-none focus:border-blue-400 transform transition-all duration-300 ease-in-out" placeholder="Enter email address" type="text" name="email" id="email" required />
          <Message></Message>
        </div>

        {/* Password */}
        <div className="flex flex-col w-full">
          <label className="text-sm text-gray-700" htmlFor="password">Password</label>
          <input className="border-gray-400 h-10 rounded-lg border-solid border-2 text-sm pl-4 outline-none focus:border-blue-400 transform transition-all duration-300 ease-in-out" placeholder="Enter password" type="text" name="password" id="password" required />
          <Link className="text-xs text-blue-400 w-fit m-auto mr-0" to={'#'}>Forgot password?</Link>
          <Message></Message>
        </div>

        {/* Submit Button */}
        <Button>Sign in</Button>

      </form>

      {/* Alternative auth and terms & conditions */}
      <AltAuth destination='#'>Sign in</AltAuth>
    </>
  )
}