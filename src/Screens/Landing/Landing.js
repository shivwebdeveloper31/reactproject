import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Container, Row, Button } from 'react-bootstrap'
import './Landing.css'

const Landing = () => {
    return (
        <div>
        <div className='main'>
        <Container>
        <Row>
            <div className='intro-text'>
                <div>
                    <h1 className='title'>Welcome to RG Sarkari Hub</h1>
                    <p className='subtitle'>Sing Up free and get free Mock-test,<br/> Test-Series Chapter-wise and Pervious Year All Exams Sloved Question</p>
                </div>
                <div className='buttonContainer'>
                <LinkContainer to="/login">
                    <a href="/login">
                        <Button size='lg' className='login' variant='outline-primary'>Login</Button>
                    </a>
                    </LinkContainer>
                    <LinkContainer to="/register">
                    <a href="/singup">
                        <Button size='lg' className='sing-up' variant='outline-primary'>Register</Button>
                    </a>
                    </LinkContainer>
                </div>
            </div>
        </Row>

</Container>
        </div>
          
        </div>
    )
}

export default Landing
