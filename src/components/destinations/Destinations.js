import React from "react";
import "./DestinationsStyles.css";

import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";
import Maldives2 from "../../assets/maldives2.jpg";
import KeyWest from "../../assets/keywest.jpg";
import Bali from "../../assets/resort_bali.jpg";
import Santorini from "../../assets/resort_Santorini.jpg";
import CostaSmeralda from "../../assets/resort_Costa Smeralda.jpg";

function Destinations() {
  return (
    <div name="destinations" className="destinations">
      <div className="container">
        <h1>All-Inclusive Resorts</h1>
        <p>Resort on the most beautiful beaches</p>
        <div className="img-container">
          <img className="span-3 image-grid-row-2" src={Santorini} alt="/" />
          <img src={BoraBora2} alt="/" />
          <img src={Maldives} alt="/" />
          <img src={Bali} alt="/" />
          <img src={BoraBora} alt="/" />
          {/* <img src={Bali} alt="/" />
          <img src={Santorini} alt="/" /> */}
        </div>
      </div>
    </div>
  );
}

export default Destinations;
