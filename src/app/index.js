/**
 * Created by aaronmcruer on 4/3/17.
 */

import React from 'react';
import {render} from 'react-dom';
import {Grid, Row, Col, ButtonGroup} from 'react-bootstrap';
class App extends React.Component {

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={8}>icon</Col> <!-- the icon row -->
                </Row>
                <Row>
                    <Col xs={12} md={8}>about</Col> <!-- the about button row -->
                </Row>
                <Row>
                <Col xs={12} md={8}>

                </Col> <!-- the login/sign-in row-->
                </Row>
            </Grid>
        )
    }
}