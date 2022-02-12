import React from 'react'
import './Login.css'
import { useState } from "react"
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import axios from "axios";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async  (e) => {
      e.preventDefault();


      try {
        const config = {
          headers: {
            "Content-type":"application/json"
          }
        }

        setLoading(true)
        const { data } = await axios.post("api/users/login", {
          email,
          password,
        },
         config
        );

        console.log(data);

        localStorage.setItem('userInfo',JSON.stringify(data));


        setLoading(false)

      } catch (error) {
        setError(error.response.data.message);

      }
  };



    return (
        <div>
        <div className='title'>LOGIN</div>
        <div className='loginContainer'>
        <Form onSubmit={submitHandler}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control id='email' type="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control id='password' value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<Row className="py-3">
    <Col>
        <Link to="/register"><b>Register Here</b></Link>
    </Col>
</Row>
        </div>
            
        </div>
    )
}

export default Login;
