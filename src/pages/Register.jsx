import Logo from "../assets/img/Aluve_SDH.png";
import {Toaster} from 'react-hot-toast';
import { useFormik } from "formik";
import {registerValidate} from '../components/Validate';
import {Link} from 'react-router-dom';

export default function Register() {

  const formik = useFormik({
    initialValues : {
      email : '',
      password : '',
    },
    validate : registerValidate,
    validateOnBlur :false,
    validateOnChange:false,
    onSubmit:async values =>{
    console.log(values)
    }
  })


    return (
        <>
    <div className="relative">
    <div className="relative py-32">
    <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
            <div className="p-8 py-12 sm:p-16">
              <h2 className="mb-8 text-2xl text-center font-bold text-gray-800 dark:text-white">Sign Up for an account</h2>
              <form onSubmit={formik.handleSubmit} className="space-y-8">
                <div className="flex">
               </div>
                <div className="space-y-2">
                  <label for="email" class="text-gray-600 dark:text-gray-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autcomplete="email"
                    {...formik.getFieldProps('email')}
                    className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label for="pwd" className="text-gray-600 dark:text-gray-300">Password</label>
                  </div>
                  <input
                    type="password"
                    name="pwd"
                    id="pwd"
                    {...formik.getFieldProps('password')}
                    className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button type="submit" className="relative flex h-11 w-full border-gray-100 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-blue-500 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                  <span className="relative text-base font-semibold text-white dark:text-dark">Sign Up</span>
                </button>

                <p className="border-t border-gray-100 dark:border-gray-700 pt-6 text-sm items-center justify-items-center text-gray-500 dark:text-gray-400">
                  Already have an account?
                  <Link to="/login" className="text-blue-500"> Sign in</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
        </>
    );
}