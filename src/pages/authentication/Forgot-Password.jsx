import Logo from "../../utils/images/Aluve_SDH.png";
export default function Forgot_Password() {
  return (
    <>
      <div className="relative">
        <div className="relative py-16">
          <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
            <div className="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
              <img src={Logo} loading="lazy" className="ml-4 w-36" alt="aluve logo" />
              <div className="rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
                <div className="p-8 py-12 sm:p-10">
                  <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h2>
                  <p className="pb-6 text-center text-sm text-gray-600">Remember your password? <a className="text-cyan-700" href="">Login Here</a></p>

                  <form action="" className="space-y-8">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-gray-600 dark:text-gray-300">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="username"
                        className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                      />
                    </div>

                    <button type="submit" className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                      <span className="relative text-base font-semibold text-white dark:text-dark">Confirm Email</span>
                    </button>

                  </form>
                </div>
              </div>
              <div className="space-x-4 text-center text-gray-500">
                <span>&copy; aluve</span>
                <a href="#" className="text-sm hover:text-primary">Contact</a>
                <a href="#" className="text-sm hover:text-primary">Privacy & Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
