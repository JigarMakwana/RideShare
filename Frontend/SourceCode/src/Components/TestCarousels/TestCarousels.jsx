/* @Author - Jigar Makwana B00842568 */

import React, {Component} from 'react';
import '../ForgotPasword/ForgotPassword.css';
import Carousel from "react-bootstrap/Carousel";
import RequestsReceived from "../Notfications/requestsReceived"
import {Col, Container, Row} from "react-bootstrap";
import ResponsesReceived from "../Notfications/responsesReceived";
import "./TestCarousels.css"

export class TestCarousels extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render()
    {
        console.log("Feedback called!");
        return (
            <Carousel>
                <Carousel.Item>
                        <Container className="col-lg-6">
                            <br/>
                            <section>
                                <RequestsReceived />
                            </section>
                        </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <Container className="col-lg-6">
                            <br/>
                            <section>
                                <ResponsesReceived />
                            </section>
                        </Container>
                    </div>
                </Carousel.Item>
            </Carousel>
        )
    }
}

