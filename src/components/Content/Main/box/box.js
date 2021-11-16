import React from "react";
import './style.css'
import IMG1 from '../../../../image/css-icon 1.png'

const Box = () => {
  return (
    <div className="box">
      <div className="box_title">Lorem ipsum dolor sit amet</div>
      <div className="box-content">
        <div className="box-content_img">
            <img src={IMG1} alt="IMG1"/>
        </div>
        <div className="box-content_text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
          sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
          accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
          massa in metus bibendum congue. Pellentesque ultrices liquam egestas
          nunc at
            ullamcorper ultricies. Donec feugiat velit nulla, vel sodales
          est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
          porta massa in metus bibendum congue. Pellentesque ultrices vestibulum
          mattis.
        </div>
      </div>
    </div>
  );
};

export default Box;
