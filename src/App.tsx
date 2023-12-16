import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ContentPanel from "./components/ContentPanel";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <ContentPanel />
    </div>
  );
}

export default App;
