import React from 'react';
import {Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default function Navigation() {
    return (
            <Nav  variant="pills" className="flex-column text-center">
              <Nav.Item bsPrefix="meunItem">
                <Link to="/mainframe/searchAccount">Search Account</Link>                 
              </Nav.Item>

            </Nav>
    );

}
