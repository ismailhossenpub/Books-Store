import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import "./AddBooks.css";



const AddBooks = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setImageURL] = useState(null);


  const onSubmit = data => {
    // const {name, price} = data;
    const bookData = {
      name:data.name,
      image: imageURL,
      price:data.price
    }
    const url = `http://localhost:5000/addBook`;

    
    
    fetch(url, {
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(bookData)
    })
    .then(res => console.log('server side response', res))

  };
  const handleImageUpload = book => {
    const imageData = new FormData();
      imageData.set('key', '70f03499b47cc0c6361945e260f26a2e');
      imageData.append('image', book.target.files[0]);
  
  
      axios.post('https://api.imgbb.com/1/upload', 
      imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (

    <div className="row">
    <div className="col-md-3  admin" >
       <AdminSidebar />
    </div>
    {/* render part */}
    <div className="col-md-9" style={{}}>
    
      <form onSubmit={handleSubmit(onSubmit)} className="card addBook">
      <h3>Add Your Book</h3>
        <input name="name" placeholder="Enter book name" ref={register} />
        <br/>
        <input name="exampleRequired" type="file"  onChange={handleImageUpload}  />
        <br/>
        <input name="price" placeholder="Enter book price" ref={register} />
        <br/>
        <input type="submit" />
      </form>
        
    </div>

</div>

    
  );
};

export default AddBooks;