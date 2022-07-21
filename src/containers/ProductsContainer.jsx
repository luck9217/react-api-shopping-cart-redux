import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardComponent from "../component/CardComponent";
import InfoBarComponent from "../component/InfoBar";
import { EcommerceContext } from "../context/EcommersContext";

const ProductsContainer = () => {
  const { products, cart, setProducts, setCart, fetchData } =
    useContext(EcommerceContext);
  const { search } = useParams();
  const [searchItem, setSearchItem] = useState("");
  const [productsBK, setProductsBK] = useState([]);
  const [flagEfect, setFlagEfect] = useState(false);

  useEffect(() => {
    fetchData();
    console.log("paso por usefect");

    return () => {
      console.log("The component disappear");
    };
  }, [search]);

  const handleClick = (event) => {
    if (searchItem.length === 0) {
      fetchData();
      setProductsBK(products);
      setFlagEfect(false);
    } else {
      fetchData(searchItem);
      setProductsBK(products);
      setFlagEfect(false);
    }

    event.preventDefault();
  };
  const handleChange = (event) => {
    setSearchItem(event.target.value);
  };

  const addCart = (event, product) => {
    cart.push(product);
    setCart([...cart]);
  };
  const handleUpKey = (e) => {
    if (flagEfect === false) {
      setProductsBK(products);
      setFlagEfect(true);
    }

    const productsFilter = productsBK.filter((element) => {
      if (element.title.toUpperCase().match(e.target.value.toUpperCase())) {
        return true;
      }
      return false;
    });
    setProducts(productsFilter);
  };

  return (
    <div className="container bg-warning">
      <InfoBarComponent
        cart={cart}
        handleUpKey={handleUpKey}
        handleClick={handleClick}
        handleChange={handleChange}
      />
      <div className="row px-2 py-2">
        {products.map((element, index) => {
          return (
            <div key={index} className="col-4">
              <CardComponent
                product={element}
                operationCard={addCart}
                button="Add to card"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsContainer;
