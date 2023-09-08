import React from "react";
import { Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import "./App.css";
import LeftBar from "./components/LeftBar";
import Token from "./components/Token";
import PairAddress from "./components/Pair";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 992px)" });
  return (
    <>
      {isBigScreen ? (
        <>
          <div className="large-screen-view">
            <LeftBar />
            <Routes>
              <Route path="/" Component={Token} />
              <Route path="/pair" Component={PairAddress} />
            </Routes>
          </div>
          <div className="footer"></div>
        </>
      ) : (
        <>
          <Navbar />
          <Home />
          <div className="footer"></div>
        </>
      )}
    </>
  );
};

export default App;
