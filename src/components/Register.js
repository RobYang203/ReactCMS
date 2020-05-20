import React from 'react';
import {Button, Form,Card} from 'react-bootstrap'
import { connect } from 'react-redux';
import {ACCOUNT_EXIST, PWD_ERR ,DATA_EMPTY , REGISTER_SUCCESS} from '../API/APIType'
import {registerAccount} from '../API/API'

import {registerUser,registerClean} from '../redux/ActionCreator'
import { Link } from 'react-router-dom';
import { Confirm, Alert } from './Tool';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.nameRef = React.createRef();
        this.accountRef = React.createRef();
        this.passwordRef = React.createRef();
        this.passwordConfirmRef = React.createRef();

        this.state = {
            isRegSuccess : false
        }
    }
    onRegisterClick = ()=>{
        const name = this.nameRef.value;
        const account = this.accountRef.value;
        const password = this.passwordRef.value;
        const password2 = this.passwordConfirmRef.value;

        this.props.registerUser(name , account , password , password2);
    }
    onWindowShow = (isShow)=>{
        if(!isShow)
            this.props.registerClean();
    }
    onAfterRegClick = ()=>{
        //this.props.registerClean();
        console.log(this.props);
        this.props.history.push("/login");

    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const {errMsg}  = nextProps;
        prevState.isRegSuccess = errMsg === "";
        return prevState;
    }
    render(){
        return(
        <div className="inputform">
            <div className="inputBody">
                <Card>    
                    <Card.Header>
                        <span>Register</span>
                    </Card.Header>       
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control ref={(ref=>(this.nameRef = ref))} type="text"  placeholder="Enter Name" />
                            </Form.Group>  
                            <Form.Group controlId="formBasicAcount">
                                <Form.Label>Account</Form.Label>
                                <Form.Control ref={(ref=>(this.accountRef = ref))} type="text"  placeholder="Enter Account" />
                            </Form.Group>          
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control  ref={(ref=>(this.passwordRef = ref))} type="text" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPasswordConfirm">
                                <Form.Label>Password Confirm</Form.Label>
                                <Form.Control  ref={(ref=>(this.passwordConfirmRef = ref))} type="text" placeholder="Password Confirm" />
                            </Form.Group>
                            <Button variant="primary" type="button" onClick={this.onRegisterClick}>
                                Register
                            </Button>
                            {' '}
                            <Button variant="outline-secondary" type="button">
                               <Link to="/" >Back</Link> 
                            </Button>
                        </Form>
                    </Card.Body>       
                </Card>
                {
                    this.props.isRegSuccess? <Confirm isShow={this.state.isRegSuccess} msg="Register Success" onConfirm={this.onAfterRegClick} />:
                    <Alert isShow={!this.props.isRegSuccess && this.props.errMsg !== ""} msg={this.props.errMsg} onWindowShow={this.onWindowShow}  />
                }
            </div>

        </div>
        )
    }
}

const mapStateToProps = (state)=>{
    const {registerCode} = state.register ;

    let errMsg = "";
    let isRegSuccess = false;
    switch(registerCode){
        case ACCOUNT_EXIST:
            errMsg = "Account is exist"
            break;
        case PWD_ERR:
            errMsg = "Password is fail";
            break;
        case DATA_EMPTY:
            errMsg = "Input is empty";
            break;
        case REGISTER_SUCCESS:
            isRegSuccess = true;
            break;
    }
    return {
        errMsg:errMsg,
        isRegSuccess:isRegSuccess
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        registerUser:(name , account , password , password2)=>{
            if(account === "" || password === "" || name === ""){
                dispatch(registerUser(DATA_EMPTY));
                return;
            }        
            registerAccount(name ,account,password,password2).then((o)=>{
                const [registerCode] = o;
                dispatch(registerUser(registerCode));
            });
        },
        registerClean:()=>{
            dispatch(registerClean());
        }
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Register);
