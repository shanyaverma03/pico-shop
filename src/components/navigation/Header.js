import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link>PocoShop</Link>
      <input type="text" placeholder="Search here" />
      <Link>Login</Link>
      <Link>Cart</Link>
    </>
  );
};

export default Header;
