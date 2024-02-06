import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import About from "../../Assets/images/About.png";

const AboutUsPage = () => {
  return (
    <div className="products">
      <hr></hr>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <h1>Spark Clothing - Clothes that will talk on your behalf.</h1>
      <img
              src={About}
              className="text-center"
              width="80%"
              alt="..."
            />
      <p>
        “We have the capabilities and experience to deliver the products you
        need to move forward.”
      </p>
      <div className="productsNav">
        <Link to="/about/TheHistory"> The History </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default AboutUsPage;