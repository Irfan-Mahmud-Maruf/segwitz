
import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import loginImg from '../../img/login__background.png'
import './Login.css'

const Login = () => {
  return (
    <Container>
        <Row  className='d-flex align-items-center login__container'>
          <Col xs={12} md={6}>
          <img src={loginImg} alt="" className='img-fluid'/>
          </Col>
            
          <Col xs={12} md={6}>
            <h1 className='mb-4 mt-3 text-center text-secondary'>Please Login</h1>
            <div className='login__form'>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter name" />
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
  
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit" className='w-100'>
                    Login
                  </Button>
                </Form>
            </div>
          </Col>
            
        </Row>
    </Container>
  )
}

export default Login