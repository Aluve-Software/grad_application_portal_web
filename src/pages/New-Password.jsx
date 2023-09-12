import Logo from "../assets/img/Aluve_SDH.png";

export default function New_Password() {
    return (
        <>
<div class="relative">
    <div class="relative py-16">
      <div class="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div class="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
          <img src="img/Aluve_SDH.png" loading="lazy" class="ml-4 w-36" alt="aluve logo" />
          <div class="rounded-3xl border border-gray-100 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
            <div class="p-8 py-12 sm:p-16">
              <h2 class="mb-8 text-2xl text-center font-bold text-gray-800 dark:text-white">Rest Your Password</h2>
              <form action="" class="space-y-8">
                <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                   <div class="flex">
                    <div>
                     <p class="font-bold">Our privacy policy has changed</p>
                     <p class="text-sm">Password must be at least 7 characters long.</p>
                    </div>
                    </div>
                    </div>
                <div>
                  <div class="flex items-center justify-between">
                    <label for="pwd" class="text-gray-600 dark:text-gray-300">New Password</label>
                  </div>
                  <input
                    type="password"
                    name="pwd"
                    id="pwd"
                    autocomplete="current-password"
                    class="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                  />
                </div>

                <div>
                  <div class="flex items-center justify-between">
                    <label for="pwd" class="text-gray-600 dark:text-gray-300">Confirm Password</label>
                  </div>
                  <input
                    type="password"
                    name="pwd"
                    id="pwd"
                    autocomplete="current-password"
                    class="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                  />
                </div>

                <button type="submit" class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                  <span class="relative text-base font-semibold text-white dark:text-dark">Confirm New Password</span>
                </button>
              </form>
            </div>
          </div>
          <div class="space-x-4 text-center text-gray-500">
            <span>&copy; aluve</span>
            <a href="#" class="text-sm hover:text-primary">Contact</a>
            <a href="#" class="text-sm hover:text-primary">Privacy & Terms</a>
          </div>
        </div>
      </div>
    </div>
    </div>
        </>
    );
}