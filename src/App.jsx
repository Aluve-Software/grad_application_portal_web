import React from 'react'
import { Pages } from './pages'
import { PrivateRoutes, NonPrivateRoutes } from './routes'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { AuthActions } from './features/authentication'

function App() {
  const currentUser = useSelector(state => state.AuthReducer.currentUser)
  const dispatch = useDispatch()

  React.useEffect(() => {

    async function onAuthStateChange() {
      const response = await axios.get('/current-user')
      const data = await response.data
      const user = data.user
      dispatch(AuthActions.onAuthStateChange(user))
    }

    // onAuthStateChange()

  }, [currentUser])

  return (
    <>
      <Routes>
        <Route element={<NonPrivateRoutes currentUser={currentUser} />}>
          <Route exact path='/*' element={<Pages.Authentication />} />
        </Route>
        <Route element={<PrivateRoutes currentUser={currentUser} />}>
          <Route path='/dashboard' element={<Pages.Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
