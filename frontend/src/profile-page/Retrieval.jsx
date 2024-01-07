import "./profile.css";
import Item from "./Item";

const items = [];
for (let i = 0; i < 3; i++) {
  items.push(<Item key={i}></Item>);
}

const Retrieval = () => {
  return (
    <div className="retrieval">
      <div className="card card-retrieval">
        <div className="card-body">
          <div className="row">
            <div className="col-4">{items}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retrieval;
