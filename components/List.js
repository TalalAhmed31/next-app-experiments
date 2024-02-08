import React from "react";
import Item from "./Item";

const List = ({arr}) => {
  const items = arr.map((item) => {
    return <Item text={item} />;
  });
  return <ul>{items}</ul>;
};

export default List;
