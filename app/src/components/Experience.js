import React from 'react'
import { Container, Row, Col, Card, Badge, ListGroup, Accordion } from 'react-bootstrap'

import '../styles/profile.css'
import '../styles/Experience.css'


function Experience() {


    return (

        <div className="Experience-section">
            <Container className="Container-experience">

                <h4>Experience</h4>

                <Row className="Row-experience">
                    <Col sm={12}>
                        <Card className="Card-experience">

                            <Card.Body>
                                <Row>
                                    <Col sm={4}>

                                        <h4>Front-end Developer</h4>
                                        <small>January 2019 - Present</small>
                                        <br />
                                        <Badge className="span-experience">Full Time</Badge>

                                    </Col>
                                    <Col className="col-data-company" sm={8}>

                                        <h4>FULLER MEXICO</h4>
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Main activites</Accordion.Header>
                                                <Accordion.Body>

                                                    <ListGroup variant="flush">
                                                        <ListGroup.Item>Built new applications using AngularJS(v1.2.9) / ReactJS(17.0.2) / VueJS</ListGroup.Item>
                                                        <ListGroup.Item>Maintenance applications with AngularJS (vAngularJS v1.2.9, v.9.2) / ReactJS(17.0.2)/ VueJS / Javascript / Jquery / Aspn.net</ListGroup.Item>
                                                        <ListGroup.Item>Built UI using Boostrap 4,5/ Tailwind / Html5 / css. (Responsive)</ListGroup.Item>
                                                        <ListGroup.Item>Call Rest API's - SOAP with Axios and others</ListGroup.Item>
                                                        <ListGroup.Item>Create API Rest services in aspn.net</ListGroup.Item>
                                                        <ListGroup.Item>Design Pattern MVC (Model, View, Controller)</ListGroup.Item>
                                                        <ListGroup.Item>Design Pattern SPA (Single Page Aplication)</ListGroup.Item>
                                                        <ListGroup.Item>Version Control (Github / AzureDevops)</ListGroup.Item>
                                                        <ListGroup.Item>Language Integrated Query (LINQ) features of C#</ListGroup.Item>
                                                        <ListGroup.Item>Oauth 2.0 / Web Jason Tokens (JWT)</ListGroup.Item>
                                                        <ListGroup.Item>Lead Projects following the next methologyes:</ListGroup.Item>
                                                        <ListGroup.Item>Agile (SCRUM)</ListGroup.Item>
                                                        <ListGroup.Item>BPM (Bussiness Process Managment)</ListGroup.Item>
                                                        <ListGroup.Item>RUP (Rational Unified Process)</ListGroup.Item>
                                                        <ListGroup.Item>Map processes in Mexico and US-Orlando</ListGroup.Item>
                                                        <ListGroup.Item>SQL Server , Tables, Store Procedures, Functions, Triggers, Views</ListGroup.Item>
                                                    </ListGroup>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12}>

                        <Card className="Card-experience">
                            <Card.Body>
                                <Row>
                                    <Col sm={4}>

                                        <h4>IT Analist</h4>
                                        <small>Decembre 2017 - January 2019</small>
                                        <br />
                                        <Badge className="span-experience">Full Time</Badge>

                                    </Col>
                                    <Col className="col-data-company" sm={8}>

                                        <h4>UNIVAR SOLUTIONS</h4>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Main activites</Accordion.Header>
                                                <Accordion.Body>

                                                    <ListGroup variant="flush">
                                                        <ListGroup.Item>SharePoint Office 365 Developer LATAM (Mexico - Brasil)</ListGroup.Item>
                                                        <ListGroup.Item>Mapped and Develop business process in Mexico and Brazil using SharePoint and .Net</ListGroup.Item>
                                                        <ListGroup.Item>BPM</ListGroup.Item>
                                                        <ListGroup.Item>RUP</ListGroup.Item>
                                                        <ListGroup.Item>ITIL</ListGroup.Item>
                                                        <ListGroup.Item>Support for the CONCUR in Mexico</ListGroup.Item>
                                                        <ListGroup.Item>SQL Server 2008 (Create Tables, Views, Triggers, Store Procedures, Function)</ListGroup.Item>
                                                        <ListGroup.Item>SOX internal controls monitoring</ListGroup.Item>
                                                    </ListGroup>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Col>
                                </Row>
                            </Card.Body>

                        </Card>

                    </Col>
                    <Col sm={12}>
                        <Card className="Card-experience">
                            <Card.Body>
                                <Row>
                                    <Col sm={4}>

                                        <h4>Web Developer</h4>
                                        <small>January 2017 - December 2017</small>
                                        <br />
                                        <Badge className="span-experience">Full Time</Badge>

                                    </Col>
                                    <Col className="col-data-company" sm={8}>


                                        <h4>TEVA PHARMECEUTICALS</h4>

                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Main activites</Accordion.Header>
                                                <Accordion.Body>


                                                    <ListGroup variant="flush">
                                                        <ListGroup.Item>Built new applications using Javascript / Jquery / PHP</ListGroup.Item>
                                                        <ListGroup.Item>Built UI using Boostrap 4,5 / Html5 / css. (Responsive)</ListGroup.Item>
                                                        <ListGroup.Item>Call Rest API's - SOAP with Axios and others</ListGroup.Item>
                                                        <ListGroup.Item>Create API Rest services in aspn.net</ListGroup.Item>
                                                    </ListGroup>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>


                                    </Col>
                                </Row>
                            </Card.Body>

                        </Card>

                    </Col>

                </Row>

            </Container>
        </div>
    )

}

export default Experience;