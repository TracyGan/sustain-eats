import "./login.scss";

function RightSide() {
  return (
    <>
      <div className="right-side ms-5 mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-align-center">
              <h1>SustainEats</h1>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <div className="form-group">
                <label>Username or Email</label>
                <input type="email" className="form-control"></input>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group mt-4">
                <label>Password</label>
                <input type="password" className="form-control"></input>
                <a className="text-align-right">Forget your password?</a>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 justify-content-center">
              <button
                type="button"
                className="btn btn-primary btn-sign-in mt-4"
              >
                Sign In
              </button>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 justify-content-center">
              Don&apos;t have an account yet?<a> Register here!</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSide;
