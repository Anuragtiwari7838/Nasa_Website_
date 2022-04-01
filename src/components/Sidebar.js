import React from "react";
import Aboutus from "./Aboutus";
import Footer from "./Footer";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div id="wrapper">
        <div id="sidebar-wrapper" className="full-background">
          <ul className="sidebar-nav">
          <img
            src={require("../image/dd.png")}
            alt="chodo na yr"
            className="rounded mx-auto d-block col-3"
          />
            <li>
              <Link to="/Home" className="rounded mx-auto d-block col-11">
                Home
              </Link>
            </li>

            <li>
              <Link to="/Apod" className="rounded mx-auto d-block col-11">Apod</Link>
            </li>
            <li>
              <Link to="/Earth" className="rounded mx-auto d-block col-11">Earth</Link>
            </li>
            <li>
              <Link to="/Mars" className="rounded mx-auto d-block col-11">Mars</Link>
            </li>
          </ul>
        </div>

        <div id="content-wrapper" className="mw-100">
          <Aboutus />
          <Footer />
        </div>
      </div>

      <script src="https://code.jquery.com/jquery.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
      <script src="assets/js/app.js"></script>
    </div>
  );
}
