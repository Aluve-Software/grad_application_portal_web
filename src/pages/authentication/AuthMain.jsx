import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Wrapper from './components/wrapper'
import Login from './login'
import Register from './register'
import ForgotPassword from './forgot-password'
import NewPassword from './new-password'
import logo from '../../utils/images/logo.png'
import { AuthenticationHook } from '../../hooks'

export function AuthMain(props) {

  const renderCompanyLogo = () => (
    <img src={logo} className='w-60' alt="Aluve Logo" />
  )

  return (
    <Wrapper className='w-screen h-screen bg-primaryBg flex justify-end'>

      {/* Open Space Text */}
      <Wrapper className='mr-14 mt-10 flex flex-col justify-center items-center h-fit gap-1 font-mono text-white'>
        <p className='text-xl'>Join our team of</p>
        <p className='text-2xl font-semibold'>Awesome Graduates</p>
      </Wrapper>

      {/* Content Wrapper */}
      <Wrapper className='w-3/5 h-full relative bg-white flex flex-col justify-evenly items-center  rounded-l-3xl overflow-y-auto'>

        {/* Company Logo */}
        {renderCompanyLogo()}

        {/* Container of Form and terms & conditions */}
        <Wrapper className="w-3/5 min-h-fit">

          {/* Provider to pass auth validation hook */}
          <AuthenticationHook.AuthValidationsProvider>

            {/* Routes  */}
            <Routes>
              <Route exact path='/' element={<Login />} />
              {/* <Route path='/register' element={<Register />} /> */}
              {/* <Route path='/' element={<ForgotPassword />} /> */}
              {/* <Route path='/' element={<NewPassword />} /> */}
            </Routes>

          </AuthenticationHook.AuthValidationsProvider>

        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}