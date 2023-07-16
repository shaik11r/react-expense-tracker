import { Link } from "react-router-dom";
import SignIn from "./SignIn";

const SignUp = () => {
  return (
    <div className="App">
      <div className="signin_box">
        <h1 className="sigin_heading">S to StockX</h1>
        <div className="signin">
          <label>Email address</label>
          <input type="text" className="inp" />
          <label>Username</label>
          <input type="text" className="inp" />
          <label>Password</label>
          <input type="password" className="inp" />
          <button className="sign_btn">Sign in</button>
        </div>
        <div className="signin_bottom">
          <p>Already account exits?</p>
          <Link to="/login">signIn.</Link>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
