import "./Team.css";
import React from "react";
import { Card } from "./assets/Card";

function Team() {
  return (
    <div className="Team">
      <div className="w-5/6 mx-auto py-10 text-white ">
        <p className="text-md font-light md:text-lg xl:text-4xl">We are</p>
        <p className="text-xl font-normal md:text-2xl xl:text-5xl">Young</p>
        <p className="text-2xl font-medium md:text-3xl xl:text-6xl">Innovative</p>
        <p className="text-3xl font-semibold md:text-4xl xl:text-7xl">Consumer Focused and</p>
        <p className="text-3xl font-bold md:text-4xl xl:text-7xl">Solution Oriented.</p>
      </div>
      <div className="w-5/6 mx-auto py-10 text-white">
        <p className="text-2xl font-light xl:text-4xl">My Team</p>
        <div className="flex flex-row py-10 md:gap-10 xl:gap-40 xl:px-10">
          <Card
            imgSrc=""
            imgAlt=""
            title="MANASH"
            subtitle="CEO"
            description="XXX XXX XXX"
          />
          <Card
            imgSrc=""
            imgAlt=""
            title="PRITAM"
            subtitle="CTO"
            description="XXX XXX XXX"
          />
          <Card
            imgSrc=""
            imgAlt=""
            title="SHEKHAR"
            subtitle="COO"
            description="XXX XXX XXX"
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
