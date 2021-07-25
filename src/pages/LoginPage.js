import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

export default function LoginPage() {
  return (
    <div className="h-screen px-36 bg-white">
      {/** Header */}
      <header className="flex justify-between py-8">
        <div>
          <img src={Logo} alt="Logo" className="h-16 w-14" />
        </div>
        <div className="text-black">
          Student Project Allocation Management System
        </div>
      </header>

      <main className="pt-24 flex justify-center">
        <div className="w-full sm:w-1/2 md:w-3/5 lg:w-3/6 py-6 border border-gray-300">
          <h1 className="text-2xl text-center font-bold text-green-900">
            Welcome Back
          </h1>
          <h2 className="text-center text-green-800">
            Lorem ipsum dolor sit amet.
          </h2>
          {/* username input */}
          <div className="flex justify-center">
            <div className="w-full md:w-1/2 ">
              <div className="justify-center w-full pt-12 max-w-xs px-8">
                <label htmlFor="" className="block font-semibold">
                  Username:
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Username"
                />
              </div>
              {/* password input */}
              <div className="justify-center w-full max-w-xs px-8">
                <label htmlFor="" className="block font-semibold">
                  Password:
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="**********"
                />
              </div>

              {/* login button */}
              <div className="justify-center w-full max-w-xs px-8 pt-2">
                <div className=" justify-center text-center">
                  <button className="bg-green-900 text-white p-2 hover:bg-green-600 w-full rounded">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
