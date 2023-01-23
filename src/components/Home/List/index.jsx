// import { style } from "@mui/system";
import React from "react";
import ListItem from "./ListItem";
// import './styles.css';
import "./style.css";

const List = ({ list }) => {
  return (
    <div
      className="list-wrap"
      style={{
        paddingRight: "30px",
        paddingLeft: "10px",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
