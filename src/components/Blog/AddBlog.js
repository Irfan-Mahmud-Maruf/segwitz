import React, { useState } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import './Blog.css'

const AddBlog = () => {
  const[title, setTitle]=useState('');
  const[image, setImage]=useState('');
  const[details, setDetails]=useState('');

    let navigate = useNavigate();

    const handleSubmit = (e) =>{
      e.preventDefault();
      navigate(`/blogs`);

    }
    
  return (
    <Container>
      <Row className='addblog__container'>
        <Card style={{ width: '50%' }}  className='addblog__card'>
          <form className='p-3' onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Blog Title' value={title} onChange = {(e) => setTitle(e.target.value)} required/>
            </div>
            <div class="mb-3">
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Image Url'
              value={image} onChange = {(e) => setImage(e.target.value)} required/>
            </div>
            <div class="mb-3">
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