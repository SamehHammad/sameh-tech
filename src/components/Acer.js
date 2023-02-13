import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";
import { Acer } from "../data";
import { giveprodect, Addconter } from "../redux/reducers";

const Dell = () => {
  const { mode } = useSelector((state) => state.darkMode);
  const dispatsh = useDispatch();
  const { search } = useSelector((state) => state.getprodect);
  const handelClick = ({ id, title, oraginprice, discount, img }) => {
    dispatsh(giveprodect({ id, title, oraginprice, discount, img }));
    dispatsh(Addconter(+1));
  };
  return (
    <div className={mode?"m-dark Apple":"m-light Apple"}>
      {Acer.filter((item) => {
        if (search === "") {
          return item;
        } else if (
          item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        ) {
          return item;
        }
      }).map(({ id, title, oraginprice, discount, img }) => (
        <div className="minApple" key={id}>
          <Link to={`/DetalesAcer/${id}`}>
            <img className="appleimg" src={img} alt="phone" />
          </Link>
          <h4 className="product_title">{title}</h4>
          <div className="Pricing">
            <div className="discount">
              <h4>$ {discount}</h4>
              <h3>$ {oraginprice}</h3>
            </div>
            <button
              onClick={() =>
                handelClick({ id, title, oraginprice, discount, img })
              }
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dell;
