import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="xapp">
      <Navbar />
      {/* <SignIn /> */}
      <Home/>
    </div>
  );
}

export default App;
