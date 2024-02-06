
import React from 'react'; 
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders without crashing', () => {
    render(<App />);
    const headerText = screen.getByText(/Header/i);
    const footerText = screen.getByText(/Footer/i);
    expect(headerText).toBeInTheDocument();
    expect(footerText).toBeInTheDocument();
  });

  //it('renders main component', () => {
  //  render(<App />);
   // const mainComponent = screen.getByTestId('main-component');
  //  expect(mainComponent).toBeInTheDocument();
 // });

  // eslint-disable-next-line no-lone-blocks
  {/*it('renders cart context provider with cart state and dispatch', () => {
    render(<App />);
    const cartContext = screen.getByTestId('cart-context');
    expect(cartContext).toBeInTheDocument();
  }); 

  it('dispatches an action to the cart reducer', () => {
    render(<App />);
    const cartDispatch = screen.getByTestId('cart-dispatch');
    fireEvent.click(cartDispatch);
    expect(cartDispatch).toHaveBeenCalled();
  });*/}
});
