import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Article from './Article';
import {checkLogined  ,getLoginInfo} from '../../API/API'
import {recoveryLogin} from '../../redux/ActionCreator'
import {Container, Row,Col, Tab, Nav, Navbar, Button, Form} from 'react-bootstrap'
import { connect } from 'react-redux';
import {Confirm} from '../Tool'
import SearchAccount from '../Content/SearchAccount';
class MainFrame extends React.Component{
    constructor(props){
        super(props);
        props.history.listen((local)=>{
            this.checkRedirect()
            console.log(this.props.match)
        });

        this.state = {
            isShow:false,
            confirmMsg:"",
            comfrimFun :null,
            contentComp : null,
            key :""
        }
        this.isRedirect = false;
    }
    checkRedirect = async ()=>{
        const isLogin =  await checkLogined();
        if(!isLogin && !this.isRedirect){ 
            this.props.history.push("/login");
            this.isRedirect  = true;;
        }
        else if(Object.keys(this.props.loginInfo).length === 0){
            this.props.recoveryLogin()
        }
    };

    showConfirmWin = (isShow , msg , comfrimFun)=>{
        this.setState({
            isShow:isShow,
            confirmMsg:msg,
            comfrimFun: comfrimFun
        });
    }
    onAfterConfirmClick = ()=>{
        this.state.comfrimFun();
        this.setState({
            isShow:false,
            confirmMsg:"",
            comfrimFun:null
        });
    }
    selectContentComp = (key)=>{
        key = key === undefined ? "searchAccount":key;
        if(key === this.state.key){
            return;
        }

        let comp = null;
        switch(key){
            case "searchAccount":
                comp = <SearchAccount/>
                break;
        }

        this.setState({
            contentComp : comp,
            key:key
        });
    }
    async componentDidMount(){      
        this.checkRedirect();
        const {subFrame} = this.props.match.params;
        console.log(subFrame)
        this.selectContentComp(subFrame);
    }
    render(){
        return(
            <>
                <Header showConfirmWin={this.showConfirmWin} />
                <Tab.Container fluid defaultActiveKey="first">
                    <Row className="Content">
                        <Col sm={2} className="bg-light">
                            <Navigation/>
                        </Col>
                        <Col sm={10} className="content-border">
                            {this.state.contentComp}
                        </Col>
                    </Row>
                </Tab.Container>
                <Confirm isShow={this.state.isShow} msg={this.state.confirmMsg} onConfirm={this.onAfterConfirmClick} />
            </>
        )
    }

    componentDidUpdate(){
        this.checkRedirect();
        const {subFrame} = this.props.match.params;
        this.selectContentComp(subFrame);
    }
}


const mapStateToProps = (state)=>{
    return {
      loginInfo :state.login.userInfo
    }
};

const mapDispatchToProps = (dispatch)=>{
  return {
      recoveryLogin:()=>{
        getLoginInfo().then((o)=>{
            const isRecovry = Object.keys(o).length !== 0;
            dispatch(recoveryLogin(o , isRecovry)); 
        })
        
      }
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(MainFrame);