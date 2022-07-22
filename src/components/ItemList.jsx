import React from "react";
import { addItem } from "../store/cart";
import { useDispatch } from "react-redux";
import './ItemList.css';

const DUMMY_ITEMS = [
  {
    id: 1,
    name: "Socks",
    price: 10,
    image:
      "https://cdn.dsmcdn.com//ty208/product/media/images/20211022/19/154460422/271809990/1/1_org.jpg",
  },
  {
    id: 2,
    name: "Bag",
    price: 20,
    image:
      "https://cdn.dsmcdn.com//ty223/product/media/images/20211103/0/164267110/286794079/1/1_org.jpg",
  },
  {
    id: 3,
    name: "Shoes",
    price: 30,
    image:
      "https://cdn.dsmcdn.com//ty136/product/media/images/20210624/20/104106480/60227307/1/1_org.jpg",
  },
  {
    id: 4,
    name: "Sport Hat",
    price: 40,
    image:
      "https://cdn.dsmcdn.com//ty74/product/media/images/20210330/10/76196326/22083246/1/1_org.jpg",
  },
];

const ItemList = () => {
  const dispatch = useDispatch();
  return (
    <div style={{width: '100%'}}>
      <h1>Shopping Items</h1>
      <div className="item-list">
        {DUMMY_ITEMS.map((item) => (
          <div key={item.id} className="item">
            <h2>{item.name}</h2>
            <p>Price: {item.price}$ </p>
            <img src={item.image} alt={item.name} />
            <button onClick={() => dispatch(addItem(item))}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
