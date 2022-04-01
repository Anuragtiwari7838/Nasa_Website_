import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import "./Mars.css";

export default function Mars() {
  //1
  const [picture1, setpicture1] = useState([]);
  const [fulldate1, setdate1] = useState([]);
  const [status1, setstatus1] = useState([]);
  const [name1, setname1] = useState([]);

  const fetchData = () => {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=ehBfeYsuAD6AhF8UpgqVBEtwPTNEzf9hiQte3smD"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let imgg = data.photos[0].img_src;
        setpicture1(imgg);
        let imggg = data.photos[0].earth_date;
        setdate1(imggg);

        let i = data.photos[0].rover.status;
        setstatus1(i);
        let n = data.photos[0].camera.full_name;
        setname1(n);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  //2
  const [picture2, setpicture2] = useState([]);
  const [fulldate2, setdate2] = useState([]);
  const [status2, setstatus2] = useState([]);
  const [name2, setname2] = useState([]);

  const fetchData2 = () => {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=NAVCAM&api_key=ehBfeYsuAD6AhF8UpgqVBEtwPTNEzf9hiQte3smD"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let imgg = data.photos[0].img_src;
        setpicture2(imgg);
        let imggg = data.photos[0].earth_date;
        setdate2(imggg);

        let i = data.photos[0].rover.status;
        setstatus2(i);
        let n = data.photos[0].camera.full_name;
        setname2(n);
      });
  };
  useEffect(() => {
    fetchData2();
  }, []);

  //3
  const [picture3, setpicture3] = useState([]);
  const [fulldate3, setdate3] = useState([]);
  const [status3, setstatus3] = useState([]);
  const [name3, setname3] = useState([]);

  const fetchData3 = () => {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=RHAZ&api_key=ehBfeYsuAD6AhF8UpgqVBEtwPTNEzf9hiQte3smD"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let imgg = data.photos[0].img_src;
        setpicture3(imgg);
        let imggg = data.photos[0].earth_date;
        setdate3(imggg);

        let i = data.photos[0].rover.status;
        setstatus3(i);
        let n = data.photos[0].camera.full_name;
        setname3(n);
      });
  };
  useEffect(() => {
    fetchData3();
  }, []);

  //4
  const [picture4, setpicture4] = useState([]);
  const [fulldate4, setdate4] = useState([]);
  const [status4, setstatus4] = useState([]);
  const [name4, setname4] = useState([]);

  const fetchData4 = () => {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=MAST&api_key=ehBfeYsuAD6AhF8UpgqVBEtwPTNEzf9hiQte3smD"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let imgg = data.photos[0].img_src;
        setpicture4(imgg);
        let imggg = data.photos[0].earth_date;
        setdate4(imggg);

        let i = data.photos[0].rover.status;
        setstatus4(i);
        let n = data.photos[0].camera.full_name;
        setname4(n);
      });
  };
  useEffect(() => {
    fetchData4();
  }, []);

  //5
  const [picture5, setpicture5] = useState([]);
  const [fulldate5, setdate5] = useState([]);
  const [status5, setstatus5] = useState([]);
  const [name5, setname5] = useState([]);

  const fetchData5 = () => {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=CHEMCAM&api_key=ehBfeYsuAD6AhF8UpgqVBEtwPTNEzf9hiQte3smD"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let imgg = data.photos[0].img_src;
        setpicture5(imgg);
        let imggg = data.photos[0].earth_date;
        setdate5(imggg);

        let i = data.photos[0].rover.status;
        setstatus5(i);
        let n = data.photos[0].camera.full_name;
        setname5(n);
      });
  };
  useEffect(() => {
    fetchData5();
  }, []);

  return (
    <div >
      <div className="row">
        <div class="row justify-content-md-center">
          <div class="col col-lg-1">
            <img
              src={require("../image/astronaut.png")}
              className="imagesize col"
              alt="s"
            />
          </div>
          <div class="col-md-auto  hea">Mars Image By Rover</div>
        </div>
      </div>
      <div className="conn">
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={picture1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{name1}</h5>
                <p className="card-text">Image Click on {fulldate1}</p>
                <p className="card-text">
                  <small className="text-muted">
                    Present Status : {status1}
                  </small>
                </p>
              </div>
            </div>
            <div className="col-5">
              <img src={picture2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{name2}</h5>
                <p className="card-text">Image Click on {fulldate2}</p>
                <p className="card-text">
                  <small className="text-muted">
                    Present Status : {status2}
                  </small>
                </p>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col">
                  <img src={picture3} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{name3}</h5>
                    <p className="card-text">Image Click on {fulldate3}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        Present Status : {status3}
                      </small>
                    </p>
                  </div>
                </div>

                <div className="col-5">
                  <img src={picture4} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{name4}</h5>
                    <p className="card-text">Image Click on {fulldate4}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        Present Status : {status4}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img src={picture5} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{name5}</h5>
                    <p className="card-text">Image Click on {fulldate5}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        Present Status : {status5}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
