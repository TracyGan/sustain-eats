const NavPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>SustainEats</h1>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <button type="btn" className="btn btn-primary">
            Profile
          </button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <button type="btn" className="btn btn-primary">
            Make A Post
          </button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <button type="btn" className="btn btn-primary">
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavPage;
