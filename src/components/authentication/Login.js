import classes from "./Auth.module.css";

const Login = () => {
  return (
    <div className={classes.wrapper}>
      <form>
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
