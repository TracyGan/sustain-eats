import "./browsing.css";
import NavBar from "../nav/NavBar";
import BrowsingItem from "./BrowsingItem";

const items = [];
for (let i = 0; i < 24; i++) {
  items.push(
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mt-1 mb-2">
      <BrowsingItem key={i}></BrowsingItem>
    </div>
  );
}

const Index = () => {
  return (
    <div className="browsing-page">
      <div className="container">
        <div className="row g-0">
          <div className="col-1">
            <NavBar />
          </div>
          <div className="col-11 g-0 mt-5">
            <h3> Browse Items </h3>
          </div>
        </div>
        <div className="row mt-4">{items}</div>
      </div>
    </div>
  );
};

export default Index;
