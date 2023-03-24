import React from "react";
import Button from "@mui/material/Button";
import './Book.css'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Book = (props) => {
  const history = useNavigate();
  const handleDelete=async()=>{
    await axios.delete(`http://localhost:5000/books/${_id}`).then(res=>res.data)
    .then(()=>history("/books"))
  }
  const { _id, name, author, description, price, image } = props.book;
  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>Rs {price}</h2>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{mt:"auto"}}>Update</Button>
      <Button onClick={handleDelete} >Delete</Button>
    </div>
  );
};

export default Book;
