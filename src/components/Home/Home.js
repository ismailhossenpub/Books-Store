import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Home.css';


const Home = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div className="row book">
            {
                books.length === 0 && <div className="d-flex justify-content-center align-items-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
            {
                books.map(book =><Book key={book._id} books={book}></Book>)
            }
        </div>
    );
};

export default Home;