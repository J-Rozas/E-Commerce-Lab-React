import React, {useState, useEffect} from "react";
import ItemsList from "../components/ItemsList";
import bread from '../assets/img/bread.jpg'
import bananas from '../assets/img/bananas.jpg'
import beans from '../assets/img/beans.jpg'

const ItemsContainer = () => {

  const [items, setItems] = useState([]);

  const givenItems = [
    {'name': 'Bread', 'price': 1, 'description': 'Some really great bread', 'img':`${bread}`},
    {'name': 'Bananas', 'price': 2, 'description': 'High potassium level', 'img':`${bananas}`},
    {'name': 'Beans', 'price': 300, 'description': 'High iron level', 'img':`${beans}`}
  ]

  useEffect(() => {
    setItems(givenItems);
  }, [])

  return (
    <>
      <ItemsList items={items}></ItemsList>
    </>
  )
}

export default ItemsContainer