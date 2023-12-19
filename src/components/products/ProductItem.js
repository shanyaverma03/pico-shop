import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import classes from "./ProductItem.module.css";

const ProductItem = ({ name, description, price, category, isFavourite }) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );

  const addToCartHandler = () => {
    if (isAuthenticated) {
      navigate("/cart");
    } else {
      navigate("/login");
    }
  };

  const addToFavHandler = () => {
    if (isAuthenticated) {
      navigate("/wishlist");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className={classes.card}>
      <h2 className={classes.productName}>{name}</h2>
      <p className={classes.productDescription}>{description}</p>
      <p className={classes.productPrice}>{price}</p>
      <p className={classes.productCategory}>{category}</p>
      <div className={classes.options}>
        <button onClick={addToCartHandler}>Add to Cart</button>
        <button onClick={addToFavHandler}>Add to Favourite</button>
      </div>
    </div>
  );
};

export default ProductItem;
