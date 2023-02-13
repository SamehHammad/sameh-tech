import React from "react";
import "./Brands.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Brands = ({ Show, setShow }) => {
  const { mode } = useSelector((state) => state.darkMode);

  const handellink = () => {
    setShow(!Show);
  };
  return (
    <div className={Show ? "Brands setBrands " : "Brands"}>
      <div className={mode ? "m-dark  " : "m-light  "}>
        <div className="logoBrands">
          <Link className="rows" to="/" onClick={handellink}>
            <img
              src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fapple.png&w=32&q=75"
              alt="phone"
            />
            <h3>Apple</h3>
          </Link>
        </div>
        <div className="logoBrands">
          <Link className="rows" to="/Dell" onClick={handellink}>
            <img
              src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fdell.png&w=32&q=75"
              alt="phone"
            />
            <h3>Dell</h3>
          </Link>
        </div>
        <div className="logoBrands">
          <Link className="rows" to="/Xiaomi" onClick={handellink}>
            <img
              src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fxiaomi.png&w=32&q=75"
              alt="phone"
            />
            <h3>Xiaomi</h3>
          </Link>
        </div>
        <div className="logoBrands">
          <Link className="rows" to="/Asus" onClick={handellink}>
            <img
              src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fasus.png&w=32&q=75"
              alt="phone"
            />
            <h3>Asus</h3>
          </Link>
        </div>
        <div className="logoBrands">
          <Link className="rows" to="/Sony" onClick={handellink}>
            <img
              src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Fsony.png&w=32&q=75"
              alt="phone"
            />
            <h3>Sony</h3>
          </Link>
        </div>
        <div className="logoBrands">
          <Link className="rows" to="/Acer" onClick={handellink}>
            <img
              src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbrands%2Facer.png&w=32&q=75"
              alt="phone"
            />
            <h3>Acer</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Brands;
