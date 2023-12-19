import { useDispatch } from "react-redux";
import { useState } from "react";

import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cartSlice";

const CartItem = ({ id, name, price, quantity }) => {
  const dispatch = useDispatch();
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const decreaseQuantityHandler = () => {
    setItemQuantity((prevQuantity) => prevQuantity - 1);
    dispatch(cartActions.decreaseQuantity(id));
  };

  const increaseQuantityHandler = () => {
    setItemQuantity((prevQuantity) => prevQuantity + 1);
    dispatch(cartActions.increaseQuantity(id));
  };

  const totalPrice = itemQuantity * price;
  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <h3 className={classes.name}>{name}</h3>
        <p className={classes.price}>${price} per item</p>
        <div className={classes.quantity_control}>
          <button onClick={decreaseQuantityHandler}>-</button>
          <span className={classes.quantity}>{itemQuantity}</span>
          <button onClick={increaseQuantityHandler}>+</button>
        </div>
        <p className={classes.total_price}>Total: {totalPrice}</p>
        <button
          className={classes.remove_button}
          onClick={() => dispatch(cartActions.removeFromCart(id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
