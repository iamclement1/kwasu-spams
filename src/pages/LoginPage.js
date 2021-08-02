import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

export default function LoginPage() {
  return (
    <div className="h-screen flex">
      <div className="w-full">
        <header className="flex justify-between py-16 px-32">
          <img src={Logo} alt="" className="h-16 w-18 " />
        </header>
        <main className="w-full flex justify-center">
          <div className="md:w-1/2 font">
            <h2 className="text-2xl text-green-800 font-sans font-semibold">
              Sign In
            </h2>
            <p className="text-xs pt-3 text-gray-500 font-serif">
              To access your dashboard Login is required.
            </p>
            {/* username input box */}
            <div className="md:w-full pt-5">
              <label
                htmlFor=""
                className="text-xm text-gray-500 font-sans text-semibold py-3"
              >
                Enter Username:
              </label>
              <input
                type="text"
                placeholder="Username"
                className="text-1xl w-full border rounded px-6 text-gray-600 shadow appearance-none text-xm leading-tight focus:outline-none focus:border-gray-500 p-3"
              />
            </div>
            {/* password input box */}
            <div className="md:w-full pt-5">
              <label
                htmlFor=""
                className="text-xm text-gray-500 font-sans text-semibold py-4"
              >
                Enter Password:
              </label>
              <input
                type="password"
                placeholder="Password"
                className="text-1xl w-full border rounded px-6 text-gray-600 shadow appearance-none text-xm leading-tight focus:outline-none focus:border-gray-500 p-3"
              />
            </div>
            {/* sign in button */}
            <div className="md:w-full pt-8">
              <Link to="/Home">
                <button className="text-1xl w-full bg-green-800 p-3 text-white font-sans hover:bg-green-600 rounded shadow">
                  Sign in
                </button>
              </Link>
              <p className="text-xs pt-5 text-center text-gray-500">
                Department of Computer Science
              </p>
              <p className="text-xs pt-1 text-center text-gray-500">
                &copy; Nnamdi Clement & Kolawole Friday 2021
              </p>
            </div>
          </div>
        </main>
      </div>
      <div className="w-full bg-green-900 text-white">
        <div className="sideimg p-auto m-auto">
          <div className="overlay h-full">
            <h1 className="item-center flex justify-center items-center flex-col pt-80 text-3xl">
              Student Project Allocation <span> Management System</span>
            </h1>
            <p className="px-36 text-center pt-5">
              An Undergraduate Research To Ease The Allocation Of Supervisor And
              Project Topic To Students.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
