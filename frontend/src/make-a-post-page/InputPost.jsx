import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./create-post.css";

const InputPost = () => {
  var data = {
    itemTitle: null,
    itemDescription: null,
    itemExpiry: null,
    itemPickUp: null,
    itemLocation: null,
  };
  var title = document.getElementById("item-title");
  var description = document.getElementById("item-description");
  var expiry = document.getElementById("item-exp");
  var pickDate = document.getElementById("item-date");
  var location = document.getElementById("item-location");
  var summitBtn = document.getElementById("submit-btn");

  if (summitBtn != null) {
    summitBtn.addEventListener("click", function (event) {
      event.preventDefault();
      data = {
        itemTitle: title.value,
        itemDescription: description.value,
        itemExpiry: expiry.value,
        itemPickUp: pickDate.value,
        itemLocation: location.value,
      };
      console.log(data);
    });

    console.log("hi");
    console.log(data);
  }
  console.log(summitBtn);

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
      <form className="container ">
        <div className="row ">
          <div className="col-10 mt-5">
            <h5>Listing Title</h5>
            <div className="input-group ">
              <input
                type="text"
                id="item-title"
                className="form-control w-75"
                required
              />
              {/* <div className="invalid-feedback">
                Please provide a listing title.
              </div> */}
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-10">
            <h5>Description</h5>
            <div className="input-group ">
              <textarea
                id="item-description"
                className="form-control w-75 text-area"
                rows="4"
                required
              />
              {/* <div className="invalid-feedback">
                Please provide a description.
              </div> */}
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-10">
            <h5>Expiration Date</h5>
            <DatePicker
              id="item-exp"
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
              id="item-date"
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
            <div className="input-group">
              <input
                id="item-location"
                type="text"
                className="form-control w-75"
                required
              />
              {/* <div className="invalid-feedback">
                Please provide a pick up location.
              </div> */}
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <button
              id="submit-btn"
              className="btn btn-main"
              type="submit"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Submit
            </button>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">
                      Summary
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <h5>Item: {data.itemTitle}</h5>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col">
                          <h5>Description: {data.itemDescription}</h5>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col">
                          <h5>Expiration Date:</h5>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col">
                          <h5>Pickup Date & Time:</h5>
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col">
                          <h5>Pickup Location:</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-primary w-50"
                      data-bs-dismiss="modal"
                    >
                      Confirm Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputPost;
