import Image from "./Image";
import NavBar from "../nav/Navbar";
import InputPost from "./InputPost";
import "../login-page/login.css";

const Index = () => {
  return (
    <div className="container-fluid g-0">
      <div className="row g-0">
        <div className="col-1">
          <NavBar />
        </div>
        <div className="col-5">
          <Image />
        </div>
        <div className="col-6">
          <InputPost />
        </div>
      </div>
    </div>
  );
};

export default Index;
