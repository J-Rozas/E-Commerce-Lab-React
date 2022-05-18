import React from "react";
import ItemDetail from "./ItemDetails";

const ItemsList = ({items, updateCustomerBasket}) => {

  const allItems = items.map((item, index) => {
    return (
      <ItemDetail key={index} item={item} updateCustomerBasket={updateCustomerBasket}></ItemDetail>
    )
  })

  return (
    <>
      {allItems}
    </>
  )
}

export default ItemsList;