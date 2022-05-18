import React, {useState, useEffect} from "react";
import ItemsList from "../components/ItemsList";
import BasketList from "../components/BasketList";
import bread from '../assets/img/bread.jpg'
import bananas from '../assets/img/bananas.jpg'
import beans from '../assets/img/beans.jpg'

const ItemsContainer = () => {

  const [items, setItems] = useState([]);
  const [customer, setCustomer] = useState({'name': 'Customer', 'basket':[], 'cash': 400});

  const givenItems = [
    {'name': 'Bread', 'price': 1, 'description': 'Some really great bread', 'img':`${bread}`},
    {'name': 'Bananas', 'price': 2, 'description': 'High potassium level', 'img':`${bananas}`},
    {'name': 'Beans', 'price': 300, 'description': 'High iron level', 'img':`${beans}`}
  ]

  useEffect(() => {
    setItems(givenItems);
  }, [])

  const updateCustomerBasket = (item) => {
    const copyBasket = [...customer.basket];
    copyBasket.push(item);
    const nextCustomer = {...customer, basket: copyBasket};
    setCustomer(nextCustomer)
  }

  return (
    <>
      <ItemsList items={items} updateCustomerBasket={updateCustomerBasket}></ItemsList>
      <h2>
        Basket:
      </h2>
      <p>Number of items: {customer.basket.length}</p>
      <BasketList items={customer.basket}></BasketList>
    </>
  )
}

export default ItemsContainer