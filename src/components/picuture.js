import React, { Component } from "react";
import PP from "./profile-picture.png";
import { Container, Row, Col, } from "reactstrap";


export default class Picuture extends Component {
    render() {
        return (
            <div className="border border-info mt-2">
                <img src={PP} className="img-fluid" />
                <p className="mb-0">Raunak Tiwari</p>
                <p className="mb-0">UI Developer</p>
            </div>
        );
    }
}

