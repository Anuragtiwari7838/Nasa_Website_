import React, { useEffect, useState } from "react";
import "./Earth.css";
import Footer from "./Footer";

export default function Earth() {
  const [Title, setTitle] = useState([]);
  const [picture, setpicture] = useState([]);
  const [Location, setLocation] = useState([]);
  const [dDate, setDate] = useState([]);
  const current = new Date();
  const datee = `${current.getFullYear() - 1}-${
    current.getMonth() + 1 < 10
      ? `0${current.getMonth() + 1}`
      : `{current.getMonth()+1}`
  }-${current.getDate()}`;
  const dateee = `${current.getFullYear()}-${
    current.getMonth() + 1 < 10
      ? `0${current.getMonth() + 1}`
      : `{current.getMonth()+1}`
  }-${current.getDate()}`;
  //`${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`

  const fetchData = () => {
    fetch(
      "https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&date=" +
        datee +
        "&dim=0.15&api_key=ehBfeYsuAD6AhF8UpgqVBEtwPTNEzf9hiQte3smD"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let exp = data.resource.planet;
        setTitle(exp);
        let ex = data.url;
        setpicture(ex);
        let lo = data.id;
        setLocation(lo);
        let da = data.date;
        setDate(da);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="con">
      <div className="row">
        <div class="row justify-content-md-center">
          <div class="col col-lg-1">
            <img
              src={require("../image/earth.png")}
              className="imagesize col"
              alt="s"
            />
          </div>
          <div class="col-md-auto  hea">Earth</div>
        </div>
      </div>
      
        <div className="container">
          <div>
            Landsat imagery is provided to the public as a joint project between
            NASA and USGS. A recent industry report on landsat satellite imagery
            data estimates that total annual value to the economy of $2.19
            billion, far exceeding the multi-year total cost of building,
            launching, and managing Landsat satellites and sensors. The value is
            derived from consumers use of the data. The objective of this
            endpoint is to give you an easy to use taste of what Landsat imagery
            data can provide.
          </div>
          <div className="row">
            <div className="col-4">
              <img src={picture} className="img" alt="a" />
            </div>
            <div className="col-8 roww">
              <h3 className="text-capitalize sat"> Planet-Name : {Title}</h3>
              <h5 className="text-capitalize sat">
                {" "}
                Satellite Location : {Location}
              </h5>
              <h5 className="text-capitalize sat"> Date/Time : {dateee}</h5>
              <p>
                This endpoint retrieves the date-times and asset names for
                closest available imagery for a supplied location and date. The
                satellite passes over each point on earth roughly once every
                sixteen days. This is an amazing visualization of the
                acquisition pattern for Landsat 8 imagery. The objective of this
                endpoint is primarily to support the use of the imagery
                endpoint.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
