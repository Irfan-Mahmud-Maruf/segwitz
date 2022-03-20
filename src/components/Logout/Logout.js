import React from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import './Logout.css'

const Logout = () => {
  return (
  
    <Container>
      <Row className='logout__container'>
      <Card style={{ width: '25%' }} className='logout__card'>
        <Card.Body className='text-center'>
          <Card.Title className='mb-3'>Logout Successfully</Card.Title>
          <Button variant="primary">Go To Home Page</Button>
        </Card.Body>
      </Card>
      </Row>
    </Container>
  )
}

export default Logout