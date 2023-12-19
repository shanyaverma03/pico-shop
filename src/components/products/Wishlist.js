import { useSelector } from "react-redux";

import classes from "./Wishlist.module.css";
import ProductItem from "./ProductItem";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  console.log(wishlist);
  return (
    <div className={classes.wrapper}>
      {wishlist &&
        wishlist.map((product) => (
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

export default Wishlist;
