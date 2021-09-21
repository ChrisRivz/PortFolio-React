import React from 'react'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'

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
                                        <p>
                                            Maintenance web application (. NET / CSS / Boostrap / HTML5 / Angular / SQL
                                            Server 2018 )
                                            Create new web application ( .NET / CSS / Boostrap / HTML5 / Ajax / Jquery /
                                            Vue / SQL Sever 2018 )
                                            Map and develop business process in Mexico and USA using SharePoint and .Net
                                            API´S/Librerias: SCORM CLOUD - CONEKTA - PAYMENT - SMS - INTERTAL API'S
                                            </p>
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
                                        <p>SharePoint Office 365 Developer LATAM (Mexico - Brasil)
                                        My principal function was mapped and develop business process in Mexico and
                                        Brazil using SharePoint and .Net
                                        Support for the CONCUR in Mexico
                                        SQL Server 2008 (Create Tables, Views, Triggers, Store Procedures, Function)
                                        SOX internal controls monitoring
                                            </p>
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
                                        <p>Direct software design
                                        Create a client-server aplication web flow application (Workflow), on the increase /
                                        Transfer Approval process budget them.
                                        Front-end: HTML5/ CSS / Boostrap / JavaScript / Ajax

                                        Audit process
                                

                                            </p>
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