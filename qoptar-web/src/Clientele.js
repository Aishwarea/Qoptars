import { Card } from "./assets/Card";
import React from "react";

function Clientele() {
  return (
  <div className="Clientele w-5/6 mx-auto ">
    <h2 className="text-3xl text-white font-medium text-center pt-10 md:text-4xl xl:text-5xl">Our Clientele</h2>
    <div className="flex flex-row py-10 text-white md:gap-10 xl:gap-40 xl:px-10">
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
      <h2 className="text-3xl text-white font-medium text-center py-0 md:text-4xl xl:text-5xl">Our Investors and Incubators</h2>
      <div className="flex flex-row py-10 text-white md:gap-10 xl:gap-40 xl:px-10">
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
