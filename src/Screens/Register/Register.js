import React, {useState} from 'react'
import ErrorMessage from '../../Component/ErrorMessage'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'


const Register = () => {

  

   const [user,setUser] = useState({
     fname:"", lname:"", email:"", password:"", confirmpassword:""
   });

   let name, value;

   const handleInputs = (e) => {
     console.log(e);
     name = e.target.name;
     value = e.target.value;


    setUser({...user, [name]:value});

   }

   const PostData = async (e) => {
     e.preventDefault();


      const { fname, lname, email, password, confirmpassword } = user;

      const res = await fetch("/api/users/", {
        method: "POST", 
        headers: {
          "Content-Type" : "application/json"
        },
        body:JSON.stringify({

          fname, lname, email, password, confirmpassword

        })
      });

      const data = await res.json();

      if (data.status = 400 || !data) {
        window.alert("Registration fail");
        console.log("Registration fail");
      } else {
        window.alert("Registration Successful");
        console.log("Registration Successful");

       
      }

   }
  
    return (
        <div>
            <div className='title'>REGISTER</div>
        <div className='RegisterContainer'>
        {/* {message && <ErrorMessage variant="danger">{message}</ErrorMessage>} */}
        <Form method="POST">
        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control id='fname' value={user.fname} name="fname" type="fname" onChange={handleInputs}  placeholder="Enter First Name"  />
    
  </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Last Name</Form.Label>
    <Form.Control id='lname' value={user.lname} name="lname" type="lname" onChange={handleInputs}  placeholder="Enter Surname"  />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control id='email' value={user.email} name="email" type="email" onChange={handleInputs}  placeholder="Enter email"  />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control id='password' value={user.password} name="password"  type="password" onChange={handleInputs}  placeholder="Password"  />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control id='confirmpassword' value={user.confirmpassword} name="confirmpassword" type="confirmpassword" onChange={handleInputs} placeholder="Confirm Password"  />
  </Form.Group>
  
  <Button variant="primary" type="submit" value="submit" name="submit" onClick={PostData}>
    Submit
  </Button>
</Form>
<Row className="py-3">
    <Col>
        <Link to="/login"><b>Login Here</b></Link>
    </Col>
</Row>
        </div>
            
        </div>
        
    )
}

export default Register
