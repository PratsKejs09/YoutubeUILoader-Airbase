import React from "react";
import Card from "./Card";
import "./CardStyles.css";
const CardList = ({ list, loading }) => {
  return (
    <ul className="list">
      {list.items.map((item, index) => {
        return (
          <Card
            loading={loading}
            key={index}
            item={item}
            channel={list.channel}
          />
        );
      })}
    </ul>
  );
};
export default CardList;
