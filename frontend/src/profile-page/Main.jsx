import "./profile.css";
import image from "../images/squirrel.jpeg";

const Main = () => {
  return (
    <div className="main">
      <div className="card main-card">
        <div className="card-body">
          <div className="row">
            <div className="col text-center">
              <img
                src={image}
                width="140rem"
                height="140rem"
                className="rounded-circle mt-5"
              ></img>
              <h6 className="mt-3">@SQUIRREL452</h6>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h6 className="fw-bold ms-1">about me</h6>
              <hr className="mt-0 mb-1"></hr>
              <p className="ms-1">
                Hi! My name is squirrel. I am a second year student at Monster
                University.
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <h6 className="fw-bold ms-1">email</h6>
              <hr className="mt-0 mb-1"></hr>
              <p className="ms-1">@squirrel452</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <h6 className="fw-bold ms-1">location</h6>
              <hr className="mt-0 mb-1"></hr>
              <p className="ms-1"> Vancouver, BC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
