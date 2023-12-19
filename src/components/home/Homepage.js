import { useEffect, useState } from "react";
import axios from "axios";

import classes from "./Homepage.module.css";
import ProductItem from "../products/ProductItem";

const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/products", {
          cancelToken: source.token,
        });
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("request cancelled");
        } else {
          console.error("error fetching:", error);
        }
      }
    };
    getProducts();

    return () => {
      source.cancel("Request cancelled");
    };
  }, []);

  return (
    <div className={classes.wrapper}>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          category={product.category}
          isFavourite={product.isFavourite}
        />
      ))}
    </div>
  );
};

export default Homepage;
