import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createSearch } from "../../redux/reducers";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { TfiShoppingCartFull } from "react-icons/tfi";

import { changeMode } from "../../redux/modeSlice";
import Logo from "../Assets/sameh.png";

const Header = ({ Show, setShow }) => {
  const { mode } = useSelector((state) => state.darkMode);
  const { mount } = useSelector((state) => state.getprodect);
  const dispatch = useDispatch();
  const handelShow = () => {
    setShow(!Show);
  };

  return (
    <div
      className={mode ? "Header dark-mode-class" : "Header light-mode-class"}
    >
      <div>
        <img className="logo" src={Logo} alt="phone" />
        <TfiShoppingCartFull className="apple-logo" style={{ color: mode ? "white" : "black" }}/>
      </div>

      <div
        className="Searching"
        style={{ border: mode ? "1px solid #fff" : "1px solid black" }}
      >
        <input
          type="text"
          placeholder="Searching for..."
          onChange={(e) => dispatch(createSearch(e.target.value))}
        />
        <i
          className="fa-solid fa-magnifying-glass"
          style={{ color: mode ? "white" : "black" }}
        ></i>
      </div>

      <div id="darkmode">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onClick={() => dispatch(changeMode())}
        />
        <label htmlFor="checkbox" className="label">
          <BsMoonStarsFill color="white" style={{ fontSize: "12px" }} />
          <BsFillSunFill color="yellow" style={{ fontSize: "12px" }} />
          <div className="ball"></div>
        </label>
      </div>

      <div className="Cart">
        <div className="Counter">
          <Link to="/Cart" className="tocart">
            <i className="fa-solid fa-bag-shopping"></i>
            {mount > 0 ? <h4 className="count">{mount}</h4> : ""}
          </Link>
        </div>
        <div className="mobile" onClick={handelShow}>
          <span className={Show ? "mobile-res one" : "mobile-res"}></span>
          <span className={Show ? "mobile-res two" : "mobile-res"}></span>
          <span className={Show ? "mobile-res three" : "mobile-res"}></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
