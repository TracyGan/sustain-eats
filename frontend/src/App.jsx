// import { useState } from "react";

import LoginPage from "./login-page/LoginPage";
import Settings from "./settings-page/Settings";
import NavBar from "./nav/NavBar";
import SideProfile from "./settings-page/SideProfile";
import SettingsInput from "./settings-page/SettingsInput";
import Index from "./make-a-post-page/Index";
// import Index from "./profile-page/Index";
// import Index from "./browsing-page/Index";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Index />
    </div>
  );
};

export default App;
