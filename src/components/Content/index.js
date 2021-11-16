import React from "react";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Main from "./Main/Main";
import "./style.css";
import Footer from "./Footer/Footer";

const Content = () => {
  return (
    <div className="content">
      <Header/>
      <Banner />
      <Main />
      <Footer/>
    </div>
  );
};

export default Content;
