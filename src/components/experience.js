import React, { Component } from "react";
import { Container, Row, Col, } from "reactstrap";


export default class Experience extends Component {
    render() {
        return (
            <Container>
               
                <Row>
                    <Col md={4} className="border-top border-dark col-md-4  mt-3"></Col>
                    <Col md={4} className="text-muted"> <strong>Work Experience</strong> </Col>
                    <Col md={4} className="border-top border-dark col-md-4  mt-3"></Col>
                    
                    <Col md={12}>
                        <Row>
                            <Col md={4} className="text-left text-muted">
                                <strong>July 2019 - Present</strong>
                            </Col>
                            <Col md={8} className="text-left text-muted">
                                <strong className="text-dark mb-0">
                                    UI Developer
                                </strong>
                                <p className="mb-0">
                                    Ranosys Technologies Pvt Ltd, Jaipur
                                </p>
                                <p>
                                    -Communicated with product managers and UX designers to translate project requirements 
                                    and business objectives intopolished user interfaces.Optimized and repaired corporatewebsite
                                     based on Magento 1 & Drupal 7 furhter updated on Magento 2 and Drupal 8 respectively.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                   
                </Row>
            </Container>
        )
    }
}

