import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './Book.css';

const Book = ({books}) => {
    const history = useHistory();
    const Checkout = (bookId) =>{
        history.push(`/checkout/${bookId}`);
    }
    
    return (
        <div className="card col-md-3 book-card">
            <div className="card-body">
                <img className="card-img-top" src={books.image} alt="no img" />
                <h3 className="card-title">{books.name}</h3>
                <div className="price-btn">
                <h3>{books.price}</h3> 
                <button onClick={()=>  Checkout(books._id)}  className="btn btn-success  book-btn">Buy Now</button>
                </div>
                
             </div>
        </div>
        
        
    );
};

export default Book;