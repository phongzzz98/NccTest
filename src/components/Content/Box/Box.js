import React from "react";
import './style.css'

const Box = (props) => {
  return (
    <div className="box">
      <div className="box_title">Lorem ipsum dolor sit amet</div>
      <div className="box-content">
        <div>
          <img className="box-content_img" src={props.img} alt="IMG1" />
          <p className="box-content_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
            sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
            accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
            massa in metus bibendum congue. Pellentesque ultrices liquam egestas
            nunc at
            ullamcorper ultricies. Donec feugiat velit nulla, vel sodales
            est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
            porta massa in metus bibendum congue. Pellentesque ultrices vestibulum
            mattis.</p>
        </div>
      </div>
    </div>
  );
};

export default Box;
