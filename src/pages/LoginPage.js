import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

export default function LoginPage() {
  return (
    <div className="h-screen flex flex-row bg-white">
      <div className=" w-full bg-white border border-red-600">
        {/* logo & text */}
        <header className="flex justify-between py-16 px-16">
          <div>
            <img src={Logo} alt="logo" className="h-18 w-16" />
          </div>
          <div className="font-bold justify-center items-center text-xl pt-3 text-green-800">
            <h2>Student Project Allocation Management System</h2>
          </div>
        </header>
        {/* form content */}
        <main className="border border-red-400 max-w-xl">
          <div className="border border-red-800">
            <h1 className="font-sans text-2xl font-semibold text-green-600">
              Sign In
            </h1>
            <h3 className="text-xs text-gray-400">
              To access your dashboard, Sign in is required.
            </h3>
          </div>

        </main>
      </div>
      <div className="w-full bg-green-400">Image</div>
    </div>
  );
}
