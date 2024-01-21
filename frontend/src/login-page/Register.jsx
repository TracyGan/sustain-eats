import "./login.css";
import { useState } from "react";

function Register() {
  // const [validated, setValidated] = useState(false);

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  // };

  return (
    <div className="right-side ms-5 mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-align-center">
            <h1>SustainEats</h1>
          </div>
        </div>
        <form className="g-3 needs-validation" noValidate>
          <div className="row mt-3">
            <div className="col">
              <div className="form-group">
                <label htmlFor="validationCustom01" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  required
                />
                <div className="invalid-feedback">Please choose a username</div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <div className="form-group">
                <label htmlFor="validationCustom02" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="validationCustom02"
                  required
                />
                <div className="invalid-feedback">Please enter an email</div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <div className="form-group">
                <label htmlFor="validationCustom03" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="validationCustom03"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <div className="form-group">
                <label htmlFor="validationCustom04" className="form-label">
                  Confirm your Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="validationCustom04"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 justify-content-center">
              <button type="submit" className="btn btn-sign-in mt-4 pt-2 pb-2">
                Register
              </button>
            </div>
          </div>
        </form>
        <div className="row mt-4">
          <div className="col-12">
            <a> Have an account? Sign In Here!</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
