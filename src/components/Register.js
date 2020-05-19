import React from 'react';
import {Button, Form,Card} from 'react-bootstrap'
export default class Register extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
        <div className="inputform">
            <div className="inputBody">
                <Card>    
                    <Card.Header>Register</Card.Header>       
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text"  placeholder="Enter Name" />
                            </Form.Group>  
                            <Form.Group controlId="formBasicAcount">
                                <Form.Label>Account</Form.Label>
                                <Form.Control type="text"  placeholder="Enter Account" />
                            </Form.Group>          
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="button">
                                Register
                            </Button>
                            {' '}
                            <Button variant="outline-secondary" type="button">
                                Back
                            </Button>
                        </Form>
                    </Card.Body>       
                </Card>
            </div>

        </div>
        )
    }
}
