import React, { Component } from "react";
import { Container, Row, Col, } from "reactstrap";


export default class Education extends Component {
    render() {
        return (
            <Container>
               
                <Row>
                    <Col md={4} className="border-top border-dark col-md-4  mt-3"></Col>
                    <Col md={4} className="text-muted"> <strong>Education</strong> </Col>
                    <Col md={4} className="border-top border-dark col-md-4  mt-3"></Col>
                    
                    <Col md={12}>
                        <Row>
                            <Col md={4} className="text-left text-muted">
                                <strong>2015 - 2019</strong>
                            </Col>
                            <Col md={8} className="text-left text-muted">
                                <strong className="mb-0 text-dark">
                                   Poornima College of Engineering Jaipur
                                </strong>
                                <p className="mb-0">
                                    Btech , Information Technolgy
                                </p>
                                <p>
                                   Percentage : 62%
                                </p>
                            </Col>
                        </Row>
                    </Col>
                   
                </Row>
            </Container>
        )
    }
}

