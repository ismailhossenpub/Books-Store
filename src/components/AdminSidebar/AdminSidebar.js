import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div>
             
             <Link to="/manageBook"  className="btn btn-success">Manage Books</Link>
                <br/>
                <br/>
                <Link to="/addBook"  className="btn btn-success">Add Book</Link>
        </div>
    );
};

export default AdminSidebar;