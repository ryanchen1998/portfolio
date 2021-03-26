import {
    Container,
    Row,
    Col,
    Button,
} from 'react-bootstrap'

import { 
    AiFillGithub,
    AiOutlineMail,
    AiFillLinkedin, 
} from 'react-icons/ai';

function Home() {
    return (
        <Container id="home" className="home-section section">
            <Row>
                <Col>
                    <h3 className="home-subheading">Hi there, I'm</h3>
                    <h1 className="home-heading">Ryan Chen</h1>
                    <p><b>Software Engineer</b> by day, and <b>Powerlifter</b> by night.</p>
                </Col>
            </Row>
            <Row>
                <Button
                    variant="icon"
                    size="sm"
                    href=""
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <AiOutlineMail size="24" color="#b18fcf"/>
                </Button>   
                <Button
                    variant="icon"
                    size="sm"
                    href=""
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <AiFillGithub size="24" color="#b18fcf"/>
                </Button> 
                <Button
                    variant="icon"
                    size="sm"
                    href=""
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <AiFillLinkedin size="24" color="#b18fcf"/>
                </Button>    
            </Row>
        </Container>
    )
}

export default Home;