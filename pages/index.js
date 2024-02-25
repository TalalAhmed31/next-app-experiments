import React from "react";
import Greet from "@/components/Greet";
import Button from "@/components/Button";
import List from "@/components/List";
import { useState } from "react";

const index = () => {
  const [arr, setArr] = useState(["This is an item", "This is an item 2", "This is an item 3", "..."]);

  const buttonClick = () => {
    setArr([...arr , "New Item"]);
  };

  return (
  
    <div>
      <Greet />

      <List arr={arr} />
      <Button click={buttonClick}> Add</Button>
    </div>
  );
};

export default index;
