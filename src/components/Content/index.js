import React from "react";
import Banner from "./banner/Banner";
import Header from "./Header/Header";
import Main from ".";
import "./style.css";

const Content = () => {
  return (
    <div className="content">
      <Header />
      <Banner />
      <Main />
    </div>
  );
};

export default Content;
