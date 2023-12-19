import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import classes from "./Auth.module.css";
import { authenticationActions } from "../../store/authenticationSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(authenticationActions.login());
    navigate("/");
  };

  return (
    <div className={classes.wrapper}>
      <form onSubmit={submitHandler}>
        <div className={classes.container}>
          <label>
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />

          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <button type="submit">Login</button>
        </div>
        <div className={classes.container}>
          <button type="button" className={classes.cancelbtn}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
