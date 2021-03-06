import React from "react";
import styled from 'styled-components';

const Button = styled.button`
	box-shadow: inset 0px 0px 15px 3px #23395e;
	background: linear-gradient(to bottom, #2e466e 5%, #415989 100%);
	background-color: #2e466e;
	border-radius: 17px;
	border: 1px solid #1f2f47;
	display: block;
	cursor: pointer;
	color: #ffffff;
	font-family: Arial;
	font-size: 15px;
	padding: 6px 13px;
	text-decoration: none;
	text-shadow: 0px 1px 0px #263666;
  width: 10rem;
  margin-top: 2%;
  &:hover {
    background: linear-gradient(to bottom, #415989 5%, #2e466e 100%);
	  background-color: #415989;
  };
  &:active {
    position: relative;
  	top: 1px;
  }
`;

const Image = styled.img`
  display: block;
  width: 10rem;
  height: auto;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 10px rgba(0,0,0,0.5);
`


const ItemDetail = ({item, updateCustomerBasket}) => {

  const handleClick = (event) => {
    updateCustomerBasket(event.target.value);
  }

  return (
    <div>
      <p>{item.name}</p>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <Image src={item.img}></Image>
      <Button onClick={handleClick} value={item.name}>Add item</Button>
    </div>
  )
}

export default ItemDetail;