import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="App">
      <div className="signin_box">
        <h1 className="sigin_heading">Sign to StockX</h1>
        <div className="signin">
          <label>Username or email address</label>
          <input type="text" className="inp" />
          <label>Password</label>
          <input type="password" className="inp" />
          <button className="sign_btn">Sign in</button>
        </div>
        <div className="signin_bottom">
          <p>New to StockX?</p>
          <Link to="/signup">Create an account.</Link>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
