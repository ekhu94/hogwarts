import piggy from "../porco.png";
import React from "react";

const Nav = ({ onGreaseClick, onNameClick, onWeightClick, onBestChange }) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">County Fair Hogs On Their Way To The Slaughterhouse</span>
      <div className="ui three item menu">
        <a 
          className="item"
          onClick={onGreaseClick}
        >
          Greased Hogs
        </a>
        <a
          className="item"
          onClick={onNameClick}
        >
          Sort By Name
        </a>
        <a
          className="item"
          onClick={onWeightClick}
        >
          Sort By Weight
        </a>
      </div>
      <div className="ui toggle checkbox">
        <input 
          type="checkbox"
          name="public"
          onChange={onBestChange}
        />
        <label>Show Only Gold & Platinum Hogs</label>
      </div>
    </div>
  );
};

export default Nav;
