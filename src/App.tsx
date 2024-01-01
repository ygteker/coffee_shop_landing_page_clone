import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ContentPanel from "./components/ContentPanel";
import TopBar from "./components/TopBar";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <ContentPanel />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
