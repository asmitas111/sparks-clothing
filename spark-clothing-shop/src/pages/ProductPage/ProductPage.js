import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
// import { Helmet } from 'react-helmet';
import Feedback from './Feedback/Feedback';

const ProductPage = () => {
  // receive the data in the child component using useContext
  const cartData = useContext(CartContext);
  console.log(cartData.cartDispatch);

  const pdtList = [
    {
      id: 1,
      productName: 'Mango full sleeve top',
      src: 'women1',
      productDescription:
        'Women casual dress',
      price: 900,
      quantity: 30
    },
    {
      id: 2,
      productName: 'Zara A line dress',
      src: 'women2',
      productDescription:
        'Women casual dress',
      price: 5460,
      quantity: 20
    },
    {
      id: 3,
      productName: 'H&M black dress',
      src: 'women3',
      productDescription:
        'Women casual dress',
      price: 3900,
      quantity: 55
    },
    {
      id: 4,
      productName: 'V-neck bodycon dress',
      src: 'women4',
      productDescription:
        'Women casual dress',
      price: 4900,
      quantity: 46
    }
  ];

  const handleAddToCart = (pdt) => {
    
    cartData.cartDispatch({
      type: 'ADD_TO_CART',
      payload: pdt
    });
  };

  return (
    <div className="row">
      <hr></hr>
      <h1> Products </h1>
      
      {pdtList.map((pdt) => {
        return (
          <div className="col-md-3" key={pdt.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{pdt.productName}</h5>
                <img src={require('../../Assets/WomenWear/' + pdt.src + '.jpg')} alt=" " width="100%" height="350px"/>
                <p className="card-text">{pdt.productDescription}</p>
                <p>Rs. {pdt.price}</p>
                <button className="btn btn-primary" onClick={handleAddToCart.bind(this, pdt)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <hr /><hr />
      <Feedback />
      
    </div>
  );
};

export default ProductPage;