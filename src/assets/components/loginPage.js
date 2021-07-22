import React from "react";
import "./assets/main.css";

export function loginPage() {
  return (
    <div className="loginPage">
      <div className="h-screen flex justity-center items-center">
        <div className="bg-red-500 text-white rounded-md p-5 w-full m-7">
          <h2 className="text-2xl">Welcome</h2>
          <p>Student Project Allocation Management System</p>
          <p className='text-xs mt-32'>Department of Computer Science</p>
        </div>
      </div>
    </div>
  );
}
