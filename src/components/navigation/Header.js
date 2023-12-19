import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Header.module.css";
import { authenticationActions } from "../../store/authenticationSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );

  return (
    <div className={classes.wrapper}>
      <Link>PocoShop</Link>
      <div className={classes.options}>
        <input type="text" placeholder="Search here" />
        {isAuthenticated ? (
          <Link to="/" onClick={() => dispatch(authenticationActions.logout())}>
            Logout
          </Link>
        ) : (
          <Link to="login">Login</Link>
        )}
        {isAuthenticated && <Link to="cart">Cart</Link>}
        {isAuthenticated && <Link to="wishlist">Wishlist</Link>}
      </div>
    </div>
  );
};

export default Header;
