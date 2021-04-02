import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddBooks from '../AddBooks/AddBooks';
import ManageBook from '../ManageBook/ManageBook';
import './Admin.css';

const Admin = () => {
    
    return (
        <div>
            <ManageBook></ManageBook>
        </div>
    );
};

export default Admin;