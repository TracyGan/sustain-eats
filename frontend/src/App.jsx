// import { useState } from "react";

import LoginPage from "./login-page/LoginPage";
import Settings from "./settings-page/Settings";
import NavBar from "./nav/NavBar";
import SideProfile from "./settings-page/SideProfile";
import SettingsInput from "./settings-page/SettingsInput";
import Index from "./make-a-post-page/Index";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Index />
    </div>
  );
};

export default App;