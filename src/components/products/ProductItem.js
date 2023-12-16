import classes from "./ProductItem.module.css";

const ProductItem = ({ name, description, price, category, isFavourite }) => {
  return (
    <div className={classes.card}>
      <h2 className={classes.productName}>{name}</h2>
      <p className={classes.productDescription}>{description}</p>
      <p className={classes.productPrice}>{price}</p>
      <p className={classes.productCategory}>{category}</p>
      <div className={classes.options}>
        <button>Add to Cart</button>
        <button>Add to Favourite</button>
      </div>
    </div>
  );
};

export default ProductItem;
