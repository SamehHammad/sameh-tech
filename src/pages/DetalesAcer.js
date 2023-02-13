import React from "react";
import { useLocation } from "react-router-dom";
import { Acer } from "../data";
import "../App.css";
import { useSelector } from "react-redux";

const DetalesAcer = () => {
  const { mode } = useSelector((state) => state.darkMode);
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const data = Acer.find((item) => item.id.toString() === path);
  return (
    <div className={mode?"DetalesDell m-dark":"DetalesDell m-light"} style={{color:mode?"white":"black"}}>
      <div className="desc" dir="rtl">
        <h3 style={{ fontsixe: "16px" }}>{data.title}</h3>
        <h4>$ {data.discount}</h4>
        <h3
          style={{
            textDecoration: "line-through",
            fontSize: "15px",
            color: "#9999",
          }}
        >
          $ {data.oraginprice}
        </h3>
        <button className="btn">Confirmation Order</button>
        <p>{data.desc}</p>
      </div>
      <div className="photo">
        <img className="photoimg" src={data.img} alt="phone" style={{borderRadius:"20%"}}/>
      </div>
    </div>
  );
};

export default DetalesAcer;
