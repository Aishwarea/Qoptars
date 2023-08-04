import { Card } from "./assets/Card";
import React from "react";

function Clientele() {
  return (
  <div className="Clientele w-3/4 mx-auto">
    <h2 className="text-3xl text-white font-medium text-center py-10">Our Clientele</h2>
    <div className="flex flex-row py-5 text-white">
      <Card 
      imgSrc=""
      imgAlt=""
      title = ""
      subtitle = ""
      description = ""
      />
      <Card 
      imgSrc=""
      imgAlt=""
      title = ""
      subtitle = ""
      description = ""
      />
      <Card 
      imgSrc=""
      imgAlt=""
      title = ""
      subtitle = ""
      description = ""
      />
      </div>
      <h2 className="text-3xl text-white font-medium text-center py-0">Our Investors and Incubators</h2>
      <div className="flex flex-row py-5 text-white">
      <Card 
      imgSrc=""
      imgAlt=""
      title = ""
      subtitle = ""
      description = ""
      />
      <Card 
      imgSrc=""
      imgAlt=""
      title = ""
      subtitle = ""
      description = ""
      />
      <Card 
      imgSrc=""
      imgAlt=""
      title = ""
      subtitle = ""
      description = ""
      />
      </div>
  </div>
  );
}

export default Clientele;
