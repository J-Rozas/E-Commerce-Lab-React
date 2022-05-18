import React from "react";

const BasketList = ({items}) => {
  const allItems = items.map((item, index)=> <p key={index}>{item}</p>);

  return (
    <ul>
      {allItems}
    </ul>
  )
}

export default BasketList;