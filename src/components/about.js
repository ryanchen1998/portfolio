import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'

function About() {
    return (
        <Container id="about" className="section">
            <Row>
                <Col>
                    <h1 className="section-title">About me</h1>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
                    <p className="section-body">
                    I am a recent Software Engineering Graduate from the University of Canterbury. 
                    I enjoy all aspects of programming and I am always looking for opportunities to learn 
                    new skills. I spend most of my free time either working on side projects, in the gym, gaming, or playing with my cat charles.
                    </p>    
                </Col>
            </Row>
        </Container>
    )
}

export default About;