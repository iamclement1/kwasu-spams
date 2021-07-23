import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";

export default function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={LoginPage} />
      <Route path='/register' exact component={Register} />
    </Switch>
  </BrowserRouter>
  );
}
