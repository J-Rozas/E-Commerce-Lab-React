import React from "react";

const ItemDetail = ({item, updateCustomerBasket}) => {

  const handleClick = (event) => {
    updateCustomerBasket(event.target.value);
  }

  return (
    <div>
      <p>{item.name}</p>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <img src={item.img} width='100' height='auto'></img>
      <button onClick={handleClick} value={item.name}>Add item</button>
    </div>
  )
}

export default ItemDetail;