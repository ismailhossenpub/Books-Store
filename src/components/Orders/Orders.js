import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import "./Orders.css";

const Orders = () => {
  const [order, setOrder] = useState([]);
  console.log(order);
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  useEffect(() => {
    fetch("http://localhost:5000/getOrder?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  return (
    <div className="order">
      <table className="order-table">
        <thead>
          <tr className="line-draw">
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Email</th>
            <th scope="col">Date and Time</th>
          </tr>
        </thead>
        {order.map((orders) => (
          <tbody key={orders._id}>
            <tr className="line-draw">
              <td>{orders.name}</td>
              <td> 1 </td>
              <td>{orders.price}</td>
              <td>{orders.email}</td>
              <td>{orders.orderTime}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Orders;
