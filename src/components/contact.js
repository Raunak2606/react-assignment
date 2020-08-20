import React, { Component } from "react";
import { Container, Row, Col, } from "reactstrap";


export default class Contact extends Component {
    render() {
        return (
            <Container>
               
                <Row>
                    <Col md={4} className="border-top border-dark col-md-4  mt-3"></Col>
                    <Col md={4} className="text-muted"> <strong>Contact</strong> </Col>
                    <Col md={4} className="border-top border-dark col-md-4  mt-3"></Col>
                    <Container>
                    <Row>
                        <Col md={4} className="text-muted">
                            <p>tiwari.raunak26@gmail.com</p>
                        </Col>
                        <Col md={4} className="text-muted">
                            <p>https://linkedin.com/in/raunak-tiwari-628964178</p>
                        </Col>
                        <Col md={4} className="text-muted">
                            <p>8114419709</p>
                        </Col>
                    </Row>
                </Container>
                   
                </Row>
            </Container>
        )
    }
}