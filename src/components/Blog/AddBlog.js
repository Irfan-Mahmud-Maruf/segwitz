import React, { useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './Blog.css';

const AddBlog = () => {
  // initial states
  const[title, setTitle]=useState('');
  const[image, setImage]=useState('');
  const[details, setDetails]=useState('');
  

    let navigate = useNavigate();
    
    // add blog button event handle
    const handleSubmit = (e, title, image, details) =>{
      e.preventDefault();
      
      // save blogs to local storage
      let allBlogs = localStorage.getItem("blogs");
      let tempBlogs = JSON.parse(allBlogs)||[];
      const newPost = {
        title, image, details
      }
      tempBlogs.push(newPost);
      localStorage.setItem("blogs", JSON.stringify(tempBlogs))

      // redirect to blog page
      navigate(`/blogs`);
    }
    
  return (
    <Container>
      <Row className='addblog__container'>
        <Card className='addblog__card'>
          <form className='p-3' onSubmit={(e) => handleSubmit(e, title, image, details)}>
            <div className="mb-3">
              <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Blog Title' value={title} onChange = {(e) => setTitle(e.target.value)} required/>
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Image Url'
              value={image} onChange = {(e) => setImage(e.target.value)} required/>
            </div>
            <div className="mb-3">
              <textarea type="password" className="form-control" id="exampleInputPassword1" placeholder='Blog Details' value={details} onChange = {(e) => setDetails(e.target.value)} required/>
            </div>
            <button type="submit" className="btn btn-outline-primary">Add Blog</button>
          </form>
        </Card>
      </Row>
    </Container>
  )
}

export default AddBlog