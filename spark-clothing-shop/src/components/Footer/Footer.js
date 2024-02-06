// Functional component with Anonymous Function
import React from "react";

const Footer = (props) => {
  // return JSX
  return (
    <>
      <footer className="text-center">
        <hr />

        <p className="red-text green-text footer-purple-text">
          Copyright 2023 | {props.name}
        </p>
        <p className="text-center">Built with Passion in Dec 2023</p>
      </footer>
    </>
  );
};

export default Footer;
