import "./login.css";
import logo from "./logo.svg";

function LeftSide() {
  return (
    <div className="left-side">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 mt-5">
            <img src={logo} className="mt-5" />
            <h1 className="mt-5"> SustainEats</h1>
            <h5 className="mt-3"> From excess to access</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
