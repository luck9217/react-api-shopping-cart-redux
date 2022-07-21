import { useState } from "react";
import { Link } from "react-router-dom";

const InfoBarComponent = ({ cart, handleUpKey, handleClick,handleChange,children }) => {


  return (
    <div className="bg-white py-4">
      <div>
        <input
          type="text"
          onInput={handleUpKey}
          placeholder="Search Product"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Search</button>
      </div>
      <Link to={"/"}>Go to home</Link>
      <br />
      <Link to={"/cardlist"}>Go to cart</Link>
      <br />
      Element to Cart: {cart.length}
      {children}
    </div>
  );
};

export default InfoBarComponent;
