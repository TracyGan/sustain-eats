import image from "../images/hasbrown.jpeg";
import "./browsing.css";

const BrowsingItem = () => {
  return (
    <div className="browsing-items">
      <div className="card">
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <img src={image} height="100%" width="100%" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="mt-0 mb-0">@original_poster</p>
                <p className="mt-2 mb-0 fw-bold">Hashbrowns</p>
                <p className="mt-0 mb-0">Expiry Date: 03/11/24</p>
                <p className="mt-0 mb-0">Meetup Info: IKB 201</p>
                <button
                  type="button"
                  className="btn btn-light w-100 mt-3 text-middle"
                >
                  Request Pickup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsingItem;
