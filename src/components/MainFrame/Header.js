import React from 'react';
import logo from '../../logo.svg';
import {Navbar,Nav} from 'react-bootstrap'
export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" fixed="top" sticky="top" className="headerBar" bsPrefix="">
            <Navbar.Brand href="/" > 
                <img src={logo} alt="logo" className="btnLogo" />
                CMS
            </Navbar.Brand>
            <Navbar.Collapse>
              <Nav className="mr-auto"></Nav>
              <Nav>
                <Nav.Link>
                  <i class="fa fa-binoculars headerIcon"></i>
                </Nav.Link>
                <Nav.Link>
                  <i class="fa fa-power-off headerIcon"></i>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    );

}

 