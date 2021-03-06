import React from 'react';
import { Nav, Container, Row, Col, Image, Button } from 'react-bootstrap'
import Avatar from '../images/Avatar.jpg'
import CV from '../documents/CHRISTOPHER_RIVADENEYRA_CV.pdf'
import '../styles/profile.css'

function Home() {

    return (

        <div className="Home-section">

            <Nav>
                <Nav.Item>
                    <Nav.Link href="#">+52 (55) 36-66-24-33</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#">crivadeneyra.09@gmail.com</Nav.Link>
                </Nav.Item>
            </Nav>

            <Container className="Container-home" fluid>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <div className="Home-info">

                            <p className="about-me-initial">Hello!, My name is</p>
                            <h1>Christopher Rivadeneyra</h1>
                            <h4>FRONT-END DEVELOPER</h4>

                            <p className="about-me-p">You can call me Chris, I'm a web developer based in Mexico. I love building beautiful software. Creating websites and applications
                            I can visually express my ideas and make people feel a certain way is incredible. I always try
            to find a connection between me and the people that use my software.</p>


                            <Button variant="primary"><a className="a-cv" href={CV} download>Download CV</a></Button>

                        </div>
                    </Col>
                    <Col className="col-image" sm={12} md={6} lg={6}>
                        <Image src={Avatar} roundedCircle className="image-profile"></Image>
                        <Container className="section-phrase">

                            <p className="about-me-initial-date">WRITE PROGRAMS THAT DO ONE THING AND DO IT WELL</p>
                            <p className="about-me-initial-date">WRITE PROGRAMS TO WORK TOGETHER</p>
                            <p> - Douglas Mcllroy</p>
                        </Container>



                    </Col>
                </Row>
            </Container>
        </div>

    );

}

export default Home;