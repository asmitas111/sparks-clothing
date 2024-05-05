// Functional component with Anonymous Function
import React from "react";

const Footer = (props) => {
  // return JSX
  return (
    <>
      <footer id="footer" className="text-center">
        <hr />

        <p>
          Copyright 2023 | {props.name}
        </p>
        <p className="text-center">Built with Passion in Dec 2023</p>
      </footer>
    </>
  );
};

export default Footer;
