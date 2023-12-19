import classes from "./CartItem.module.css";

const CartItem = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <h3 className={classes.name}>Name</h3>
        <p className={classes.price}>$10 per item</p>
        <div className={classes.quantity_control}>
          <button>-</button>
          <span className={classes.quantity}>2</span>
          <button>+</button>
        </div>
        <p className={classes.total_price}>Total:88</p>
        <button className={classes.remove_button}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
