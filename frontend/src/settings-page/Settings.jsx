import NavBar from "../nav/NavBar";
import SideProfile from "./SideProfile";
import SettingsInput from "./SettingsInput";

const Settings = () => {
  return (
    <div className="container-fluid ms-3 g-0">
      <div className="row g-0">
        <div className="col-1">
          <NavBar />
        </div>
        <div className="col-4">
          <SideProfile />
        </div>
        <div className="col-7">
          <SettingsInput />
        </div>
      </div>
    </div>
  );
};

export default Settings;
