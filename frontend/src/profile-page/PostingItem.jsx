import image from "../images/hasbrown.jpeg";
import "./profile.css";

const PostingItem = () => {
  return (
    <div className="posting-item">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-2">
              <img
                src={image}
                height="100%"
                width="92%"
                className="image-posting-item"
              />
            </div>
            <div className="col gx-0 mt-3">
              <b>Hashbrowns</b>
            </div>
            <div className="col text-end">
              <button type="button" className="btn">
                <i className="bi bi-caret-right postings-arrow"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostingItem;
