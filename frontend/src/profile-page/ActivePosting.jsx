import "./profile.css";
import PostingItem from "./PostingItem";

const items = [];

for (let i = 0; i < 2; i++) {
  items.push(
    <div className="row mt-2 mb-1">
      <div className="col-12">
        <PostingItem></PostingItem>
      </div>
    </div>
  );
}

const ActivePosting = () => {
  return (
    <div className="active-postings">
      <div className="card active-postings-card">
        <div className="card-body">{items}</div>
      </div>
    </div>
  );
};

export default ActivePosting;
