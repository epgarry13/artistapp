import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";


import home from "./pages/home";
import portfolio from "./pages/portfolio";
import contact from "./pages/contact";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/portfolio" component={portfolio} />
        <Route exact path="/contact" component={contact} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
