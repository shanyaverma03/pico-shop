import classes from "./CartItem.module.css";

const CartItem = ({ id, name, price, quantity }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <h3 className={classes.name}>{name}</h3>
        <p className={classes.price}>${price} per item</p>
        <div className={classes.quantity_control}>
          <button>-</button>
          <span className={classes.quantity}>{quantity}</span>
          <button>+</button>
        </div>
        <p className={classes.total_price}>Total:88</p>
        <button className={classes.remove_button}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
