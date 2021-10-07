import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import TecLogo from '../images/TEC-Logo.png'
import SCRUMMasterLogo from '../images/Scrum-Foundation-Certification-CertiProf-SFPC.png'
import SCRUMFundationLogo from '../images/Scrum-Foundation-Certification-CertiProf-SFPC.png'

import '../styles/Certifications.css'

function Certificates() {

    return (

        <div className="Certificates-section">
            <Container className="Container-certifications">
                <h4>Posgrads & Certifications </h4>
                <Row className="Row-certifications">
                    <Col className="col-certification">
                        <Card className="card-certification">

                            <Card.Body className="card-boy-certification">

                                <Row>
                                    <Image className="card-boy-certification-image" src={TecLogo} />
                                    <Col><h5>Administration of Information Technology Projects (APTI)</h5></Col>
                                </Row>
                            </Card.Body>


                        </Card>
                    </Col>
                    <Col className="col-certification">
                        <Card className="card-certification">

                            <Card.Body className="card-boy-certifications">

                                <Row>
                                    <Image className="card-boy-certification-image" src={SCRUMMasterLogo} />
                                    <Col><h5>SCRUM Master Professional Certificate (SMPC)</h5></Col>
                                </Row>
                            </Card.Body>


                        </Card>
                    </Col>
                    <Col className="col-certification">
                        <Card className="card-certification">


                            <Card.Body className="card-boy-certifications">

                                <Row>
                                    <Image className="card-boy-certification-image" src={SCRUMFundationLogo} />

                                    <Col><h5>SCRUM Fundations Professional Certificate (SFPC)</h5></Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container> 
            </div>
    )

};

export default Certificates;