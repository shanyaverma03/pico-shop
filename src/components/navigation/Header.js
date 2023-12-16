import { Link } from "react-router-dom";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.wrapper}>
      <Link>PocoShop</Link>
      <div className={classes.options}>
        <input type="text" placeholder="Search here" />
        <Link to="login">Login</Link>
        <Link to="cart">Cart</Link>
        <Link to="wishlist">Wishlist</Link>
      </div>
    </div>
  );
};

export default Header;
