import { useContext } from "react";
import { EcommerceContext } from "../context/EcommersContext";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const HomeContainer = () => {
  const { cart } = useContext(EcommerceContext);
  const task = useSelector((state) => state.cartReducer);

  return (
    <div>
      <h1>Yours product : {cart.length} </h1>
      <br />
      <Link to={"/products"}>Go to products</Link>
      <br />
      <Link to={"/cardlist"}>Go to Cart</Link>
    </div>
  );
};

export default HomeContainer;
