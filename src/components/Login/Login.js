
import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import loginImg from '../../img/login__background.png'
import { login } from '../../redux/userSlice'
import './Login.css'

const Login = () => {

    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');

    let navigate = useNavigate();

    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
      e.preventDefault();

      dispatch(login({
        name:name,
        email:email,
        password:password,
        loggedIn: true
      }));
      navigate(`/Blogs`);

    }

  return (
    <Container>
        <Row  className='d-flex align-items-center login__container'>
          <Col xs={12} md={7}>
          <img src={loginImg} alt="" className='img-fluid'/>
          </Col>
            
          <Col xs={12} md={4}>
            <h1 className='mb-4 mt-3 text-center text-secondary'>Please Login</h1>
            <div className='login__form'>
                <Form onSubmit={(e) => handleSubmit(e)}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter name" value={name} onChange = {(e) => setName(e.target.value)} required/>
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange = {(e) => setEmail(e.target.value)} required/>
                  </Form.Group>
  
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" value={password} onChange = {(e) => setPassword(e.target.value)} required/>
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