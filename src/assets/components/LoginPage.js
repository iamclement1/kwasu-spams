import React from "react";

export default function LoginPage() {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="flex flex-col relative w-full md:m-20">
        <div className="bg-green-800 text-white sm:rounded-md p-5 m-18 shadow-2xl mt-7 ">
          <h1 className="text-4xl">Welcome</h1>
          <p className="text-xs">
            Student Project Allocation Management System
          </p>
          <p className="text-xs sm:mt-32">Department of Computer Science</p>
        </div>
        <div className="sm:absolute md:absolute p-5 right-12 bg-white sm:rounded-md p-2 sm:w-70 flex flex-col justify-center items-center shadow-xl">
          <h2 className="text-green-800 mb-3 text-sm font-bold ">Log In</h2>
          <div className="bg-green-800 shadow-xl rounded-full w-12 h-12"></div>
          <input
            type="text"
            placeholder="Enter Username"
            className="text-xs w-full p-1 focus:outline-none border-b-2 border-grey-600 focus:border-green-800 bg-transparent mb-2"
          />
          <input
            type="text"
            placeholder="*************"
            className="text-xs w-full p-1 focus:outline-none border-b-2 border-grey-600 focus:border-green-800 bg-transparent"
          />
          <div className="inline-block relative w-full mt-3">
            <select className="text-xs appearance-none w-full bg-white border border-green-800 hover:border-green-500 px-4 py-2 pr-8 sm:rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>--Login As--</option>
              <option>Student</option>
              <option>Supevisor</option>
              <option>Admin</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <button className="bg-green-800 hover:bg-green-400 text-xs text-white w-full mt-4 mb-7 focus:outline-none p-2">
            Login
          </button>
        </div>
      </div>
    </main>
  );
}
