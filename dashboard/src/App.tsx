import "./App.css";

import React from "react";

import AppHeader from "./components/appHeader";
import Dashboard from "./components/dashboard";

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
