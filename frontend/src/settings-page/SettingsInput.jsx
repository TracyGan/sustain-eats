import "./settings.css";

const SettingsInput = () => {
  return (
    <div className="settings-input">
      <div className="container ms-5">
        <div className="row g-0">
          <div className="col-8 mt-5">
            <div className="form-group mt-3">
              <h6 className="title">Name</h6>
              <input type="text" className="form-control"></input>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-8 mt-4">
            <div className="form-group">
              <h6 className="title">Username</h6>
              <input type="username" className="form-control"></input>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-8 mt-4">
            <div className="form-group">
              <h6 className="title">Email</h6>
              <input type="email" className="form-control"></input>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-8 mt-4">
            <div className="form-group">
              <h6 className="title">Location</h6>
              <input type="text" className="form-control"></input>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-8 mt-4">
            <div className="form-group">
              <h6 className="title">Bio (max 200 char)</h6>
              <input type="text" className="form-control"></input>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-8 mt-4">
            <div className="form-group">
              <h6 className="title">Password</h6>
              <input type="password" className="form-control"></input>
            </div>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-5 mt-5 me-3">
            <button type="btn" className="btn secondary-btn w-75 pe-3">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsInput;
