import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsContainer from "./containers/ProductsContainer";
import { EcommerceProvider } from "./context/EcommersContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import { useDispatch, useSelector } from "react-redux";
import { addElementToCart } from "./redux/actions/cart";
import  CardList  from "./containers/CartList";

const App = () => {
  const STATE = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  //console.log(STATE.cart);
  return (
    <div className="App">
      {/* <button
        onClick={() => {
          dispatch(addElementToCart({ id: 1, name: "shirt", price: 3000 }));
        }}
      >
        Add to Cart
      </button> */}
      <BrowserRouter>
        <EcommerceProvider>
          <Routes>
            <Route exact path="/" element={<HomeContainer />}>
              {" "}
            </Route>
            <Route
              exact
              path="/products"
              element={<ProductsContainer />}
            ></Route>
            <Route
              exact
              path="/products/:search"
              element={<ProductsContainer />}
            ></Route>
            <Route exact path="/cardlist" element={<CardList />}></Route>
          </Routes>
        </EcommerceProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
