import "./App.css";
import Apod from "./components/Apod";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Earth from "./components/Earth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Mars from "./components/Mars";
import Aboutus from "./components/Aboutus";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="asd">
          <div className="title">
          <img
              src={require("../src/image/logoo.png")}
              alt="chodo na yr"
              className=" mx-auto d-block col-3 heading"
            />
          </div>
          <Navbar/>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Apod" element={<Apod />} />
            <Route path="/Earth" element={<Earth />} />
            <Route path="/Mars" element={<Mars />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
