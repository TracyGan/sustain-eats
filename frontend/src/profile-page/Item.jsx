import image from "../images/ham.jpeg";

const Item = () => {
  return (
    <div className="card card-retrieval-items">
      <div className="card-body">
        <div className="item">
          <div className="row">
            <div className="col text-center">
              <img src={image} height="100rem" width="190rem" />
            </div>
            <div className="col">
              <p className="retrieval-info mt-1 mb-0">Ham</p>
              <p className="retrieval-info-username text-secondary mt-0">
                @originalPoster
              </p>
            </div>
          </div>
          <div className="row mt-0">
            <div className="col-5 mt-0">
              <p className="retrieval-info mt-0">12:15pm</p>
            </div>
            <div className="col-7 text-end">
              <p className="retrieval-info mt-0">HydeLay Park</p>
            </div>
            <div className="col mt-0">
              <i>November 23, 2023</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
