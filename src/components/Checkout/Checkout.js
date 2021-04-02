import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './Checkout.css';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const {bookId} = useParams();
    const [book, setBook] = useState({});
    const [order, setOrder] = useState({});
    useEffect(()=>{
        fetch(`https://glacial-hamlet-84309.herokuapp.com/book/${bookId}`)
        .then(res => res.json())
        .then(data => setBook(data))
    }, [])
   

    const OrderCheckout = ()=>{
        
        const orderDetails = {...loggedInUser, ...book, orderTime: new Date()}
        fetch('https://glacial-hamlet-84309.herokuapp.com/addOrder',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => setOrder(data))
    }
    const {_id, name, price}= book;
    return (
            <div className="checkout">
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{name}</td>
                    <td> 1 </td>
                    <td>{price}</td>
                    </tr>
                    <tr>
                    <td> Total </td>
                    <td>  </td>
                    <td>= {price}</td>
                    </tr>
                </tbody>
            </table>
            <Link to="/order"  onClick={OrderCheckout} className="btn btn-success">Checkout</Link>
            </div>
            
            
       
        
    );
};

export default Checkout;