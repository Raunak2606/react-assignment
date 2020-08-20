import React, { Component } from "react";
import { Container, Row, Col, } from "reactstrap";


export default class Projects extends Component {
    render() {
        return (
            <Container>
               
                <Row>
                    <Col md={4} className="border-top border-dark col-md-4  mt-3"></Col>
                    <Col md={4} className="text-muted"> <strong>Projects</strong> </Col>
                    <Col md={4} className="border-top border-dark col-md-4  mt-3"></Col>
                   
                    <Col md={12}>
                        <Row>
                            <Col md={4} className="text-left text-muted">
                                <strong>Mothercare & Justice Singapore</strong>
                            </Col>
                            <Col md={8} className="text-left text-muted">
                                <strong className=" text-dark">
                                    https://www.mothercare.co.id/ (06/2020 – 08/2020)
                                </strong>
                                <p>
                                Styling of the Product Listing Page and Customized the filters usingCSS and Less with cross browser compatibility and responsiveness.
                                <br/>
                                Styling of Add To Cart pop-up and Checkout Section.
                                </p>
                                
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12}>
                        <Row>
                            <Col md={4} className="text-left text-muted">
                                <strong>Nice Portal </strong>
                            </Col>
                            <Col md={8} className="text-left text-muted">
                                <strong className="text-dark">
                                    https://www.nice.natsteel.com.sg(01/2020 – 03/2020)
                                </strong>
                                <p>
                                    Developed and Style the UI of content management system forNatsteel’s nice portal,used Drupal 8 as a content managementsystem for developing and deploying the website
                                </p>
                                
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12}>
                        <Row>
                            <Col md={4} className="text-left text-muted">
                                <strong>Dr. GL </strong>
                            </Col>
                            <Col md={8} className="text-left text-muted">
                                <strong className=" text-dark">
                                    https://www.drgl.com (10/2019 – 11/2020)
                                </strong>
                                <p>
                                    Styling the Product Description Section , Carousels by using the CSS3 , Boostrap 4.
                                </p>
                                
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12}>
                        <Row>
                            <Col md={4} className="text-left text-muted">
                                <strong>
                                    Ranosys Revamp 
                                </strong>

                            </Col>
                            <Col md={8} className="text-left text-muted">
                                <strong className=" text-dark">
                                    https://www.ranosys.com (04/2020 – 05/2020)
                                </strong>
                                <p>
                                    Based on Drupal 8 and Bootstrap 4 Default theme, styling of theCareer Section, Contact-Us Section, and several inner pages usingCSS , Less, Bootstrap 4.
                                </p>
                                
                            </Col>
                        </Row>
                    </Col>
                   
                </Row>
            </Container>
        )
    }
}

