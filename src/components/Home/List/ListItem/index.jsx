import React from "react";
// import "./styles.css";
import "./style.css";

const listItem = ({
  item: { coverSrc, title, price, deliveryFree, serviceTime, rating },
}) => {
  return (
    <div className="listItem-wrap">
      <img src={coverSrc} alt="item" />
      <header>
        <h4>{title}</h4>
        <span>⭐{rating}</span>
      </header>
      <footer>
        <p>
          <b>{serviceTime} </b> <span>Delivery Fee {deliveryFree}</span>
        </p>
        <p>
          <b>{price}</b>
        </p>
      </footer>
    </div>
  );
};

export default listItem;
