import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { CartContext } from "./contexts/CartContext";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { appRoutes } from "./routes/appRoutes";
import cartReducer from "./reducers/cartReducer";
import { useReducer } from "react";

function App() {
  // props used to pass the data to footer component
  const name = "Asmita Srivastava";

  // returns the current state and dispatch method
  const [cartState, cartDispatch] = useReducer(cartReducer);
  console.log(cartState);

  const cartData = {
    cartState: cartState,
    cartDispatch: cartDispatch,
  };

  return (
    // wrapping child component in Context provider to supply state value
    <CartContext.Provider value={cartData}>
      <BrowserRouter>
        <div className="container mt-5 pt-3">
          <Header></Header>
          <main className="container mt-5 pt-3">{appRoutes}</main>
          <Footer name={name} />
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
