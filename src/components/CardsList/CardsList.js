import React from "react";
import Card from "../Card/Card";

const CardsList = ({ lists, bgColor }) => {
  return (
    <>
      {lists.map((v) => {
        return <Card key={v} text={v} bgColor={bgColor[v]} />;
      })}
    </>
  );
};

export default CardsList;
