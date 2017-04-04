/**
 * Created by aaronmcruer on 4/3/17.
 */

import React from 'react';
import { render } from 'react-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export class TopNav extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Green Spaces</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Sign Up/ Log In</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
