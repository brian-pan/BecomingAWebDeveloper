//stylesheets
import "./styles/App.scss";
//packages
import React from "react";
//components
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="app">
      <Header text="travel journey" />
      <Main />
    </div>
  );
}
