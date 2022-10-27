import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Profile from "./Containers/Profile/profile.js";
import Links from "./Containers/Links/links";
function App() {
  return (
    <div className="App ">
      <Profile />
      <Links />
    </div>
  );
}

export default App;
