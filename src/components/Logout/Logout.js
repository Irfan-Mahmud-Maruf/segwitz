import React from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { logout } from '../../redux/userSlice'
import './Logout.css'

const Logout = () => {
  
  let navigate = useNavigate();

    const dispatch = useDispatch()

    const handleLogout = (e) =>{
      e.preventDefault();
      dispatch(logout());

      // redirect to login page
      navigate(`/login`);

    }


  return (
  
    <Container>
      <Row className='logout__container'>
      <Card className='logout__card'>
        <Card.Body className='text-center'>
          <Card.Title className='mb-3'>Logout Successfully</Card.Title>
          <Form onSubmit={handleLogout}>
          <Button variant="primary" type='submit'>Go To Home Page</Button>
          </Form>
        </Card.Body>
      </Card>
      </Row>
    </Container>
  )
}

export default Logout