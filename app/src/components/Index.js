import React from 'react';

//import Skeleton from 'react-loading-skeleton'

import { Container } from 'react-bootstrap'
import Home from './Home'
import Biography from './Biography'
import Certification from './Certifications'
import Experience from './Experience'
import Portfolio from './Portfolio'

class Index extends React.Component {

    render() {

        return (
            <div>

                <Container>
                    <Home />
                </Container>
                <Container>
                    <Biography />
                </Container>
                <Container>
                    <Certification />
                </Container>

                <Container>
                    <Experience/>
                </Container>

                <Container>
                    <Portfolio/>
                </Container>

            </div>
        )
    }

}

export default Index;