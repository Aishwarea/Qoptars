import "./Team.css";
import React from "react";
import { Card } from "./assets/Card";

function Team() {
  return (
    <div className="Team">
      <div className="w-5/6 mx-auto py-10 text-white xl:w-3/4">
        <p className="text-md font-light xl:text-lg">We are</p>
        <p className="text-xl font-normal xl:text-2xl">Young</p>
        <p className="text-2xl font-medium xl:text-3xl">Innovative</p>
        <p className="text-3xl font-semibold xl:text-4xl">Consumer Focused and</p>
        <p className="text-3xl font-bold xl:text-4xl">Solution Oriented.</p>
      </div>
      <div className="w-3/4 mx-auto py-0 text-white">
        <p className="text-2xl font-light">My Team</p>
        <div className="flex flex-row py-5 xl:gap-20">
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
