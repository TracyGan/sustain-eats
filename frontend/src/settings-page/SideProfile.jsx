import "./settings.scss";
import image from "../images/squirrel.jpeg";

const SideProfile = () => {
  return (
    <div className="side-profile">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div className="col mt-5 d-flex justify-content-center">
            <img
              src={image}
              alt="ProfilePhoto"
              width="140rem"
              height="140rem"
              className="rounded-circle mt-5"
            />
          </div>
        </div>
        <div className="row ">
          <div className="col d-flex justify-content-center mt-5">
            <h5>@SQUIRREL452</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideProfile;
