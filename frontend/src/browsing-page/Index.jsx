import "./browsing.css";
import NavBar from "../nav/NavBar";
import BrowsingItem from "./BrowsingItem";

const items = [];
for (let i = 0; i < 12; i++) {
  items.push(
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mt-1 mb-2">
      <BrowsingItem key={i}></BrowsingItem>
    </div>
  );
}

const Index = () => {
  return (
    <div className="browsing-page">
      <div className="row g-0">
        <div className="col-1 mt-3 ps-4">
          <NavBar />
        </div>
        <div className="col-11 mt-5 ps-3">
          <h3> Browse Items </h3>
        </div>
      </div>
      <div className="row mt-4 ms-2 me-2">{items}</div>
    </div>
  );
};

export default Index;
