import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";

import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";

function App() {

  const [ highlight, setHighlight] = useState(0);

  return (
    <>

      <BrowserRouter>
        <Navbar highlight={highlight} setHighlight={setHighlight}/>
        <Switch>
          <Route exact path="/" component={()=> <Home setHighlight={setHighlight}/>}/>
          <Route exact path="/portfolio" component={()=> <Portfolio setHighlight={setHighlight}/>} />
          <Route exact path="/contact" component={()=> <Contact setHighlight={setHighlight}/>} />
        </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
