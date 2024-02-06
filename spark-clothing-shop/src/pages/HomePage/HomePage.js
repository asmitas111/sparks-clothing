//import { Carousel } from 'bootstrap/dist/js/bootstrap.bundle';
import React from "react";
import Carousel from "./Carousel/Carousel";
import image1 from "../../Assets/images/Product1.png";
import image2 from "../../Assets/images/Product2.png";
import image3 from "../../Assets/images/Product3.png";
import image4 from "../../Assets/images/Product4.png";

const HomePage = () => {
  return (
    <div>
      <hr />
      <Carousel />
      <hr />

      <div className="row">
        <div className="col-md-3">
          <img src={image1} alt="prod1" />
        </div>
        <div className="col-md-3">
          <img src={image2} alt="prod2" />
        </div>
        <div className="col-md-3">
          <img src={image3} alt="prod3" />
        </div>
        <div className="col-md-3">
          <img src={image4} alt="prod4" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;