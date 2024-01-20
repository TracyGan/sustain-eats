import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./create-post.css";

const InputPost = () => {
  const [startDate, setDate] = useState(null);
  const [startExpDate, setExpDate] = useState(null);

  const today = new Date();
  const minDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 2
  );

  const secondMinDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1
  );

  return (
    <div className="input-post">
      {/*eslint-disable-next-line react/no-unknown-property */}
      <form className="container needs-validation" novalidate>
        <div className="row ">
          <div className="col-10 mt-5">
            <h5>Listing Title</h5>
            <div className="input-group has-validation">
              <input type="text" className="form-control w-75" required />
              <div className="invalid-feedback">
                Please provide a listing title.
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-10">
            <h5>Description</h5>
            <div className="input-group has-validation">
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
        </div>
        <div className="row mt-3">
          <div className="col-10">
            <h5>Expiration Date</h5>
            <DatePicker
              className="date-picker pt-2 pb-2 ps-2"
              selected={startExpDate}
              onChange={(date) => setExpDate(date)}
              minDate={minDate}
              required
            ></DatePicker>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-10">
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
              minDate={secondMinDate}
              required
            ></DatePicker>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-10">
            <h5>Pick Up From</h5>
            <div className="input-group has-validation">
              <input type="text" className="form-control w-75" required />
              <div className="invalid-feedback">
                Please provide a pick up location.
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <button className="btn btn-main" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputPost;
