import "./Team.css";
import React from "react";
import { Card } from "./assets/Card";

function Team() {
  return (
    <div className="Team">
      <div className="w-3/4 mx-auto py-20 text-white">
        <p className="text-lg font-light">We are</p>
        <p className="text-2xl font-normal">Young</p>
        <p className="text-3xl font-medium">Innovative</p>
        <p className="text-4xl font-semibold">Consumer Focused and</p>
        <p className="text-4xl font-bold">Solution Oriented.</p>
      </div>
      <div className="w-3/4 mx-auto py-0 text-white">
        <p className="text-2xl font-light">My Team</p>
        <div className="flex flex-row py-5">
            <Card 
            imgSrc=""
            imgAlt=""
            title = "MANASH"
            subtitle = "CEO"
            description = "XXX XXX XXX"
            />
            <Card 
            imgSrc=""
            imgAlt=""
            title = "PRITAM"
            subtitle = "CTO"
            description = "XXX XXX XXX"
            />
            <Card 
            imgSrc=""
            imgAlt=""
            title = "SHEKHAR"
            subtitle = "COO"
            description = "XXX XXX XXX"
            />
        </div>
      </div>
    </div>
  );
}

export default Team;
