import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import AllBlogs from './AllBlogs'

const Blogs = () => {
  let navigate = useNavigate();


  // add blog button event handle
  const handleAddBlog = () =>{
    // redirect to add blog page
    navigate(`/add-blog`);
  }

  // logout button event handle
  const handleLogout = () =>{
    // redirect to logout page
    navigate(`/logout`);
  }

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
      <div>
      <form className="d-flex mb-2">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
      </div>
      <div>
        <Button variant="primary" className='me-2' onClick={handleAddBlog}> Write New Blog</Button>
        <Button variant="primary" onClick={handleLogout}> Logout</Button>

      </div>
      </Container>
    </Navbar> 
    <AllBlogs></AllBlogs>
    </>
  )
}

export default Blogs