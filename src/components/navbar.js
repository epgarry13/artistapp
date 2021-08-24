import React, { useState, useEffect } from "react";
import "../styles/navbar.scss";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [home, setHome] = useState("selected");
  const [portfolio, setPortfolio] = useState("not");
  const [contact, setContact] = useState("not");

  useEffect(() => {
    if (props.highlight === 0){
      setHome("selected");
      setPortfolio("not");
      setContact("not");
    } else if (props.highlight === 1){
      setHome("not");
      setPortfolio("selected");
      setContact("not");
    } else {
      setHome("not");
      setPortfolio("not");
      setContact("selected");
    }
  }, [props.setHighlight, props.highlight])

  return (
    <>

        <div className="navbar">
          <div className="navbar_container">
            <div>
              <Link
                to="/"
                className={home}
                onClick={() => {
                  props.setHighlight(0);
                  }
                }
              >
                Home
              </Link>
            </div>
            <div>
              <Link
                to="/portfolio"
                className={portfolio}
                onClick={() => {
                  props.setHighlight(1);
                }}
              >
                Portfolio
              </Link>
            </div>
            <div>
              <Link
                to="/contact"
                className={contact}
                onClick={() => {
                  props.setHighlight(2);
                }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
    </>
  );
}

export default Navbar;
