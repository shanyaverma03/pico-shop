import { useSelector } from "react-redux";

import CartItem from "./CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div>
      {cart &&
        cart.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
    </div>
  );
};

export default Cart;
