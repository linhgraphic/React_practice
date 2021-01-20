import React from "react";
import "./App.css";
import Header from "./components/header";

const App = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default App;
