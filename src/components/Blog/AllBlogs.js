import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  
  useEffect(()=>{
    const getBlog = JSON.parse(localStorage.getItem('blogs'));
     if (getBlog) setBlogs(getBlog);
  },[])
  console.log(blogs);
  return (
    <Container>
      {
        blogs && blogs.map((blog,i) => (
          <div key={i} className="card mt-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={blog.image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">{blog.details}</p>
            </div>
          </div>
        </div>
      </div>
        ))
      }
      
    </Container>
  )
}

export default AllBlogs