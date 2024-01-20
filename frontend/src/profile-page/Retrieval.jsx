import "./profile.css";
import RetrievalItem from "./RetrievalItem";

const items = [];
for (let i = 0; i < 4; i++) {
  items.push(
    <div className="col-4">
      <RetrievalItem key={i}></RetrievalItem>
    </div>
  );
}

const Retrieval = () => {
  return (
    <div className="retrieval">
      <div className="card card-retrieval">
        <div className="card-body">
          <div className="container">
            <div className="row flex-nowrap overflow-auto">{items}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retrieval;
