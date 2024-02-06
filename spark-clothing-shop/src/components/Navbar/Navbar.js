// Functional Component with Arrow Function
import React from "react";
import { NavLink } from "react-router-dom";
//import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage';
//import contact from '../../Assets/icons/ContactUs.png';
import home from "../../Assets/icons/Home.png";
//import product from '../../Assets/icons/Product.png';

const Navbar = () => {
  const mnlst = [
    {
      id: 1,
      url: "/product",
      title: "Product",
      src: "Product",
      alt: "product",
    },
    {
      id: 2,
      url: "/about",
      title: "About Us",
      src: "AboutUs",
      alt: "about",
    },
    {
      id: 3,
      url: "/contact-us",
      title: "Contact Us",
      src: "ContactUs",
      alt: "contact",
    },
  ];

  return (
    <ul className="navbar-nav navbar-fixed-top">
      <li className="nav-item md auto">
        <NavLink to="/" className="nav-link active" aria-current="page">
          <img src={home} alt="home" height="120px" width="120px" />
        </NavLink>
      </li>
      {mnlst.map(({ id, url, src, alt }) => {
        return (
          <li className="nav-item" key={id}>
            <NavLink to={url} className="nav-link" activeclassname="active">
              <img
                src={require("../../Assets/icons/" + src + ".png")}
                alt={alt}
                height="120px"
                width="120px"
              />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
