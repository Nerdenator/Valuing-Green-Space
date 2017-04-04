/**
 * Created by aaronmcruer on 4/4/17.
 */

import React from 'react';
import { Nav, NavItem }from 'react-bootstrap';


export class StartMenuItem extends React.Component {
    render() {
        return(
        <Nav bsStyle="pills" stacked activeKey={1} onSelect={handleSelect}>
            <NavItem eventKey={1} href="/home">Explore</NavItem>
            <NavItem eventKey={2} href="Item">Evaluation Tool</NavItem>
            <NavItem eventKey={3} href="Education">Education</NavItem>
            <NavItem eventKey={4} href="Gallery">Gallery</NavItem>
            <NavItem eventKey={5} href="Connect">Connect</NavItem>
        </Nav>
        );
    }
}
function handleSelect(selectedKey) {

}