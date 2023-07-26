import React from "react";
import "./CardStyles.css";
import CustomLoader from "../CustomLoader/index";
const Card = ({ item, channel, loading }) => {
  return (
    <>
      {loading ? (
        <li className="card">
          <CustomLoader />
        </li>
      ) : (
        <li className="card">
          <a
            href={`https://www.youtube.com/watch?v=${item.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <img src={item.image} alt={item.title} className="card--image" />
            <img src={item.image} alt={item.title} className="channel--image" />
            <h4 className="card--title">{item.title}</h4>
            <p className="card--channel">
              <i>{channel}</i>
            </p>
            <div className="card--metrics">
              {item.views} <br /> {item.published}
            </div>
          </a>
        </li>
      )}
    </>
  );
};
export default Card;
