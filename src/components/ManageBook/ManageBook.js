import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const ManageBook = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [books])
    const deleteBook = (id) => {
        fetch(`http://localhost:5000/deleteBook/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if (result) {
               console.log(result);
            }
        })
    }
    return (
        
        <div className="row">
            <div className="col-md-3   admin" >
               <AdminSidebar />
            </div>
            {/* render part */}
            <div className="col-md-9" style={{}}>
                <table className="order-table">
                <thead >
                    <tr className="line-draw">
                    <th scope="col">Book Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                {
                books.map(books => 
                <tbody key={books._id}>
                    <tr className="line-draw">
                    <td>{books.name}</td>
                    <td>${books.price}</td>
                    <td><button onClick={()=> deleteBook(books._id)} className="btn btn-success">Delete</button></td>
                    </tr>
                </tbody>)
                }
            </table>
                
            </div>

        </div>
    );
};

export default ManageBook;