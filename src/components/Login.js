import React from 'react';
import {connect} from 'react-redux'
import {Button, Form, Card} from 'react-bootstrap'
import {Alert} from './Tool'

import {LOGIN_SUCCESS , ACCOUNT_ERR, PWD_ERR ,DATA_EMPTY} from '../API/APIType'
import {loginToWeb} from '../API/API'

import {userLogin ,cleanData} from '../redux/ActionCreator'
import {useHistory} from 'react-router'
import { Link } from 'react-router-dom';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.accountRef = React.createRef();
        this.passwordRef = React.createRef();
      //  const h = useHistory();
        console.log(this) 
    }

    onLoginClick = ()=>{
        const accountValue = this.accountRef.value;
        const passwordValue = this.passwordRef.value;

        this.props.userLogin(accountValue , passwordValue);
       
    };
    onWindowShow = (isShow)=>{
       if(!isShow)
            this.props.cleanData();
    }


    render(){ 
        
        return(
        <div className="inputform">
            <div className="inputBody">
                <Card >    
                    <Card.Header>Login</Card.Header>       
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="formBasicAccount">
                                <Form.Label>Account</Form.Label>
                                <Form.Control ref={(ref)=> {this.accountRef = ref} } type="text"  placeholder="Enter Account" />
                            </Form.Group>          
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control ref={(ref)=> {this.passwordRef = ref} } type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Text className="text-muted">
                                if you haven't account , <Link to="/register">please register</Link>
                            </Form.Text>
                            <Button variant="primary" type="button" onClick={this.onLoginClick}>
                                Login
                            </Button>
                        </Form>
                    </Card.Body>       
                </Card>

                <Alert isShow={this.props.errMsg !== ""} msg={this.props.errMsg} onWindowShow={this.onWindowShow}/>
            </div>
        </div>
        )
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        const {errMsg , isLogined} = prevProps;
        if(errMsg === "" && isLogined){
            this.props.history.push('/mainFrame');
        }
    }

}


const mapStateToProps = (state)=>{
    const {loginCode , isLogined} = state.login ;

    let errMsg = "";
    switch(loginCode){
        case ACCOUNT_ERR:
            errMsg = "Account is fail"
            break;
        case PWD_ERR:
            errMsg = "Password is fail";
            break;
        case DATA_EMPTY:
            errMsg = "Input is empty";
            break;
    }
    return {
        errMsg:errMsg,
        isLogined:isLogined
    }
};
const mapDipatchToProps = (dispatch)=>{
    return {
        userLogin : (account , password)=>{   
            if(account === "" || password === ""){
                dispatch(userLogin(null , DATA_EMPTY));
                return;
            }        
            loginToWeb(account,password).then((o)=>{
                const [userInfo ,loginCode] = o;
                dispatch(userLogin(userInfo ,loginCode));
            });
        },
        cleanData :()=>{
            dispatch(cleanData());
        }
    }
};

export default connect(mapStateToProps,mapDipatchToProps)(Login)
