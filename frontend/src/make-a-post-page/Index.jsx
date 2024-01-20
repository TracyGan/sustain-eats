import Image from "./Image";
import NavBar from "../nav/Navbar";
import InputPost from "./InputPost";
import "./create-post.css";

const Index = () => {
  return (
    <div className="create-post container-fluid ">
      <div className="row">
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
