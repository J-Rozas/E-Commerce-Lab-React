import React from "react";

const ItemDetail = ({item}) => {
  return (
    <>
      <p>{item.name}</p>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <img src={item.img} width='100' height='auto'></img>
    </>
  )
}

export default ItemDetail;