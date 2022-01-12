import React from "react";
import "./Hero.css";
import Heading from "./Heading";
import mrinal from "../../assets/images/mrinal.png";

export default function Hero() {
  return (
    <div className="wrapper">
      <Heading text="Happy Birthday Mrinal !!!" arc={120} radius={400} />
      <img className="king" src={mrinal} alt={"King mrinal"} />
    </div>
  );
}
