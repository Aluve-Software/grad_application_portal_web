import './App.css'
import Login from './pages/Login';
import Register from './pages/Register';
import New_Password from './pages/New-Password';
import Forgot_Password from './pages/Forgot-Password';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: 'login',
    element : <Login></Login>
  },
  {
    path: 'register',
    element : <Register></Register>
  },
  {
    path: 'forgot_password',
    element : <Forgot_Password></Forgot_Password>
  },
  {
    path: 'new_password',
    element : <New_Password></New_Password>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;
