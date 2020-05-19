import React from 'react';
import {Nav} from 'react-bootstrap'
export default function Navigation() {
    return (
            <Nav  variant="pills" className="flex-column text-center">
              <Nav.Item>
                 123
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="second">Tab2</Nav.Link>
              </Nav.Item>
            </Nav>
    );

}
