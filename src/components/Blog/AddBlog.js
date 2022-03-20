import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import './Blog.css'

const AddBlog = () => {
  return (
    <Container>
      <Row className='addblog__container'>
        <Card style={{ width: '50%' }}  className='addblog__card'>
          <form className='p-3'>
            <div className="mb-3">
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Blog Title'/>
            </div>
            <div class="mb-3">
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Image Url'/>
            </div>
            <div class="mb-3">
              <textarea type="password" className="form-control" id="exampleInputPassword1" placeholder='Blog Details'/>
            </div>
            <button type="submit" className="btn btn-outline-primary">Add Blog</button>
          </form>
        </Card>
      </Row>
    </Container>
  )
}

export default AddBlog