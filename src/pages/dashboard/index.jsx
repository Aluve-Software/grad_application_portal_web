import React from 'react'
import { useDispatch } from 'react-redux'
import { AuthActions } from '../../features/authentication'

export function Dashboard() {
  const dispatch = useDispatch()

  const onClick = (e) => {
    e.preventDefault()

    dispatch(AuthActions.signOutUser())
  }

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-around'>
      <h1>DashBoard</h1>
      <button onClick={onClick} className='w-28 h-10 bg-blue-500 rounded-lg'>Sign out</button>
    </div>
  )
}
