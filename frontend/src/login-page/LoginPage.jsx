// import { useState } from "react";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
import Register from "./Register";

const LoginPage = () => {
  return (
    <div className="container ms-0 g-0">
      <div className="row">
        <div className="col-6 ms-0 me-0">
          <LeftSide />
        </div>
        <div className="col-6">
          <Register />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
