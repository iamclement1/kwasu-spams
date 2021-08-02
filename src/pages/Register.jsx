import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <h2>I am register page.</h2>
      <span>
        Already registered? <Link to="/">Sign in now</Link>
      </span>
    </div>
  );
}
