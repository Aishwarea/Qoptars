import "./App.css";
import React from "react";
import Image from "./images/image1.jpg";

function App() {
  return (
    <div className="App">
      <img src={Image} alt="scenery" className="w-5/6 mx-auto py-20" />
      <div className="w-5/6 mx-auto py-0 xl:">
      <p className="text-white text-lg font-light py-10 md:text-m xs:text-xs xl:text-3xl">
      <span className="font-medium ">Qoptars </span>is a consumer focused drone company envisioned to solve
        complicated problems using Drone & UAV.
        <br />
        We are serving 3 areas of aerial application: Videography, Insight &
        Surveillance.
      </p>
      </div>
    </div>
  );
}

export default App;
