import React, {useContext} from 'react';
import { CartContext } from '../../contexts/CartContext'
import { Link } from 'react-router-dom';
import image1 from '../../Assets/images/LOGO.jpg';
import Navbar from '../Navbar/Navbar';
import '../../../src/App.css'

function Header() {
    const cartData = useContext(CartContext);
    console.log(cartData.cartState);

  //must return JSX
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light fixed-top bg-custom-red">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          <img src={image1} alt="logo" width="100%" height="120px" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <Navbar />
            <button className="btn btn-danger">
              Cart ({cartData?.cartState?.length > 0 ? cartData?.cartState?.length : 0})
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;