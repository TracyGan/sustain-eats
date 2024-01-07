import "./profile.css";
import ActivePosting from "./ActivePosting";
import Retrieval from "./Retrieval";
import Main from "./Main";
import NavBar from "../nav/NavBar";

const Index = () => {
  return (
    <div className="index">
      <div className="row">
        <div className="col-1">
          <NavBar />
        </div>
        <div className="col-4 mt-5">
          <Main />
        </div>
        <div className="col-7 mt-5 ps-5 pe-5">
          <div className="row">
            <div className="col">
              <h4 className="fw-bold">Upcoming Retrievals</h4>
              <Retrieval />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <h4 className="fw-bold">My Active Postings</h4>
              <ActivePosting />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
