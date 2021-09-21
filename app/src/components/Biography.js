import React from 'react'
import { Row, Col, Image, Container, Badge } from 'react-bootstrap'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import Avatar from '../images/Avatar-2.jpg'
import '../styles/profile.css'
import '../styles/Biography.css'

function Biography() {

    return (

        <div className="Biography-section">

            <Container className="Container-profile">
                <Row>
                    <Col className="col-image-2">
                        <Image src={Avatar} roundedCircle className="image-profile" />
                        <br />
                        <div className='nav-social'>

                            <Badge pill className="icon-social">
                                <FaLinkedin className="fasocial" />
                            </Badge>{' '}

                            <Badge pill className="icon-social">
                                <FaGithub className="fasocial" />
                            </Badge>{' '}

                            <div className="div-profile">

                                <p>Front-end Developer</p>
                                <p className="p-years">27 years</p>
                                <h4>Christopher Rivadeneyra</h4>

                            </div>


                        </div>
                    </Col>
                    <Col>

                    <div className="Biography-info">

                        <h4>Biography</h4>

                        <p>

                            I'm a Front-end Developer with over 3 years of experience. I'm from
                            Mexico. I code and create web elementrs for amazing companies.
                            I like work with new people.

                            New people new Experiences.
                            
                            

                        </p>

                        <p>
                        Currently I am highly focused on Front-End Development.. 
                        To create fully responsive websites and applications I use HTML5, CSS3, CSS Flexbox

                        I had experience with Reactjs, Vuejs and Angularjs.
                        
                        </p>

                        <p>

                        When working on my projects I use GIT version control, NPM package manager to download necessary dependecies, Webpack to bundle all my files as well as the terminal to have a greater control of the system.

                        </p>

                        <p>

                            When I'm in a project I like to follow Agile Methologies. One of my favorites is
                            SCRUM. Is good to mention that I'm SCRUM MASTER as well.

                            And I'm preparing myself in order to get the PMO Certifications.


                            
                        </p>

                        <p>
                        My goal is to become a Full-Stack Developer so in the near future, I am super excited to learn React.js combined with GraphQL, Node.js, Express and MongoDB to build Full Stack applications.

                        And also to be PMO Certificated.
                        </p>

                    </div>
                    
                    </Col>
                </Row>
            </Container>

        </div>
    )

};

export default Biography;