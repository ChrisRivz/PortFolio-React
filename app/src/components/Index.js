import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card'


import Skeleton from 'react-loading-skeleton'

import Avatar from '../images/Avatar.jpg'
import  '../styles/profile.css'

class Index extends React.Component {

    render() {

        return (
            <div>

                <Container className="container-1">

                    <Row>
                        <Col className="col-img">
                        <Image src={Avatar} roundedCircle className="image-profile"></Image>

                        <Card>
                            <Card.Body className="shadow-lg">

                                <h4>10+</h4>
                                <label>Projects done</label>


                            </Card.Body>
                        </Card>



                    
                        </Col>
                        <Col>
                        <h1>I'm FRONT END DEVELOPER</h1>
                        <p>Hello! I'm Chris, a web developer based in Mexico. I love building beautiful software. Creating websites and applications 
                            I can visually express my ideas and make people feel a certain way is incredible. I always try 
                            to find a connection between me and the people that use my software.</p></Col>
                    </Row>

                </Container>
            </div>
        )
    }

}

export default Index;