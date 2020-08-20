import React, { Component } from "react";
import { Container, Row, Col, } from "reactstrap";


export default class Skills extends Component {
    render() {
        return (
            <Container>
               
                <Row>
                    <Col md={4} className="border-top border-dark col-md-4  mt-3"></Col>
                    <Col md={4} className="text-muted"> <strong>Skills</strong> </Col>
                    <Col md={4} className="border-top border-dark col-md-4  mt-3"></Col>
                  
                    <Col md={12}>
                        <Row>
                            <Col md={4} className="text-left text-muted">
                                <strong>Language</strong>
                            </Col>
                            <Col md={8} className="text-left text-muted">
                                <p>
                                    C++, Java
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12}>
                        <Row>
                            <Col md={4} className="text-left text-muted">
                                <strong>Database</strong>
                            </Col>
                            <Col md={8} className="text-left text-muted">
                                <p>
                                   MySql
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12}>
                        <Row>
                            <Col md={4} className="text-left text-muted">
                                <strong>Web Technology</strong>
                            </Col>
                            <Col md={8} className="text-left text-muted">
                                <p>
                                    CSS 3, HTML 5, Bootstrap 4, JavaScript, Jquery,Less
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12}>
                        <Row>
                            <Col md={4} className="text-left text-muted">
                                <strong>Tools, CRM , CMS</strong>
                            </Col>
                            <Col md={8} className="text-left text-muted">
                                <p>
                                    Visual Studio Code, Git, Magento 2, Drupal 8
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}



