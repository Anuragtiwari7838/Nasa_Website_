import React, { useEffect, useState } from "react";
import "./Apod.css";
import Footer from "./Footer";

export default function Apod() {
  const [user, setuser] = useState([]);
  const [im, setimg] = useState([]);
  const [Date, setDate] = useState([]);
  const [Title, setTitle] = useState([]);

  const fetchData = () => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=ehBfeYsuAD6AhF8UpgqVBEtwPTNEzf9hiQte3smD"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let exp = data.explanation;
        setuser(exp);
        let ex = data.url;
        setimg(ex);
        let aa = data.date;
        setDate(aa);
        let bb = data.title;
        setTitle(bb);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="row">
        <div class="row justify-content-md-center">
          <div class="col col-lg-1">
            <img
              src={require("../image/space-ship.png")}
              className="imagesize col"
              alt="s"
            />
          </div>
          <div class="col-md-auto  hea">The Astronomy Picture of the Day</div>
          <div class="col col-lg-1"></div>
        </div>
      </div>
      <div className="con">
        <div className="container">
          <div className="card">
            <img className="image-size" src={im} alt="dd" />
            <div className="card-body">
              <h3 className="row justify-content-center heas">{Title}</h3>
              <div className="row">
                <div className="col-10">{Date}</div>
              </div>
              <p className="card-text">{user}</p>
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </>
  );
}
