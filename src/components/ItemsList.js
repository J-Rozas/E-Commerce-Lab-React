import React from "react";
import ItemDetail from "./ItemDetails";

const ItemsList = ({items}) => {

  const allItems = items.map((item, index) => {
    return (
      <ItemDetail key={index} item={item}></ItemDetail>
    )
  })

  return (
    <>
      {allItems}
    </>
  )
}

export default ItemsList;