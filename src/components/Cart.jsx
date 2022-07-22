import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/cart";
import "./Cart.css";
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Cart</h1>
      {
        !items.length ? <h2 style={{
          color: "white",
          textAlign: "center",
          fontSize: "3rem"
        }}>Your cart is empty.</h2> : <>
        <div className="cart-list">
        <table>
          <thead>
            <tr>
              <td>Image </td>
              <td> Name </td>
              <td> Price </td>
              <td>Quantity </td>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr>
                <td>
                  <img src={item.image} alt={item.name} />
                </td>
                <td>{item.name} </td>
                <td>{item.price} </td>
                <td>
                  <button
                    className="down-btn"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    <MdArrowDownward />
                  </button>
                  {item.quantity}
                  <button
                    className="up-btn"
                    onClick={() => dispatch(addItem(item))}
                  >
                    <MdArrowUpward />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>Total Price: {totalPrice}$ </p></>
      }
    </div>
  );
};

export default Cart;

/* <table>
      <thead>
        <tr>
          <td>Quantity  </td>
          <td> Name </td>
          <td> Price </td>
          <td> Remove </td>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr>
            <td>{item.quantity} </td>
            <td>{item.name} </td>
            <td>{item.price} </td>
            <td>
            <button className="btn-remove" onClick={() => dispatch(removeItem(item.id))}>
              Remove Item
            </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table> */

// {items.map((item) => (
//   <div className="item" key={item.id}>
//     <span>Quantity: {item.quantity}</span>
//     <h2> {item.name} </h2>
//     <img src={item.image} alt={item.name} />
//     <button className="btn-remove" onClick={() => dispatch(removeItem(item.id))}>
//       Remove Item
//     </button>
//   </div>
// ))}
