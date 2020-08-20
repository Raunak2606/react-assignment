import React, { Component } from "react";
import { Container , Row, Col,} from "reactstrap";
import Skills from './skills'
import Picture from './picuture'
import Experience from "./experience";
import Education from './education'
import Projects from "./projects";
import Contact from './contact';


export default class Resume extends Component {
    render() {
        return (
            <div>
                <Container className="mb-3 mt-3">
                    <Row className="border">
                        <Col md={9}>
                        <strong className="d-block w-100">Resume</strong>
                        <p className="d-block w-100">Raunak Tiwari</p>
                        <Skills/>
                        <br/>
                        <Experience/>
                        <br/>
                        <Education/>
                        <br/>
                        <Projects/>
                        <br/>
                        <Contact/>
                        <br/>
                        </Col>
                        <Col md={3}>
                          <Picture/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}