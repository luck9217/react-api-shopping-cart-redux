import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CardComponent from "../component/CardComponent";
import { EcommerceContext } from "../context/EcommersContext";

const CartList = () => {
  const { cart } = useContext(EcommerceContext);
  const [newProduct, setNewProduct] = useState(false);

  useEffect(() => {
    // return () => {
    //     console.log("Delete product");
    //   };
  }, [cart, newProduct]);

  const deleteCart = (event, product) => {
    const foundProduct = cart.find((element) => element.id === product.id);
    if (foundProduct) {
      cart.splice(cart.indexOf(foundProduct), 1);
      if (newProduct === true) {
        setNewProduct(false);
      } else {
        setNewProduct(true);
      }
    }
  };
  return (
    <>
      <Link to={"/products"}>Back to products</Link>
      <div>CartList : {cart.length}</div>

      <div className="row px-2 py-2">
        {cart.map((element, index) => {
          return (
            <div key={index} className="col-4">
              <CardComponent
                product={element}
                operationCard={deleteCart}
                button="Delete"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CartList;
