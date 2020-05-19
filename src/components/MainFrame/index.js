import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Article from './Article';
import {Container, Row,Col, Tab, Nav, Navbar, Button, Form} from 'react-bootstrap'
export default class MainFrame extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <>
                <Header/>
                <Tab.Container fluid defaultActiveKey="first">
                    < Row className="Content">
                        <Col sm={2} className="bg-light">
                            <Navigation/>
                        </Col>
                        <Col sm={10}>

                        </Col>
                    </Row>
                </Tab.Container>
            </>
        )
    }
}