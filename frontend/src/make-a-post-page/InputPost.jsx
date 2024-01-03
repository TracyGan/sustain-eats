import "../login-page/login.scss";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const InputPost = () => {
  const [startDate, setDate] = useState(new Date());

  const today = new Date();
  const minDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 2
  );

  return (
    <div className="input-post">
      <form className="container needs-validation" novalidate>
        <div className="row">
          <div className="col mt-5">
            <h5>Listing Title</h5>
            <input type="text" className="form-control w-75" required />
            <div className="invalid-feedback">
              Please provide a listing title.
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <h5>Description</h5>
            <textarea
              className="form-control w-75 text-area"
              rows="4"
              required
            />
            <div className="invalid-feedback">
              Please provide a description.
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <h5>Expiration Date</h5>
            <DatePicker
              className="date-picker pt-2 pb-2 ps-2"
              selected={startDate}
              onChange={(date) => setDate(date)}
              minDate={minDate}
              required
            ></DatePicker>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <h5>Available Date and Time</h5>
            <DatePicker
              className="date-picker pt-2 pb-2 ps-2"
              selected={startDate}
              onChange={(date) => setDate(date)}
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MM/dd/yyyy h:mm aa"
              showTimeSelect
              minDate={startDate}
            ></DatePicker>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <h5>Pick Up From</h5>
            <input type="text" className="form-control w-75" required />
            <div className="invalid-feedback">
              Please provide a pick up location.
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <button className="btn btn-primary" type="submit">
              {" "}
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputPost;
