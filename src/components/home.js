import React, {
    useState,
    useEffect
} from 'react';

import {
    Container,
    Row,
    Col,
    Button,
    Toast,
    OverlayTrigger,
    Tooltip,
} from 'react-bootstrap'

import { 
    AiFillGithub,
    AiOutlineMail,
    AiFillLinkedin, 
} from 'react-icons/ai';

function Home() {
    const [showTooltip, setShowTooltip] = useState(false);

    function copyToClipboard() {
        navigator.clipboard.writeText('RyanChen98@oulook.com');
        setShowTooltip(true);
    };

    useEffect(() => {
        const timerId = setInterval(() => {
        setShowTooltip(false);
        }, 3000);

        return () => clearInterval(timerId);
    },[showTooltip]);

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
                <OverlayTrigger
                    show={showTooltip}
                    placement='top'
                    delay={1}
                    overlay={
                        <Tooltip>
                            Email copied to clipboard!
                        </Tooltip>
                    }
                >
                    <Button
                        variant="icon"
                        size="sm"
                        onClick={(e) => copyToClipboard()}
                    >
                        <AiOutlineMail size="24" color="#b18fcf"/>
                    </Button> 
                </OverlayTrigger>  
                <Button
                    variant="icon"
                    size="sm"
                    href="https://github.com/ryanchen1998"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <AiFillGithub size="24" color="#b18fcf"/>
                </Button> 
                <Button
                    variant="icon"
                    size="sm"
                    href="https://www.linkedin.com/in/ryan-chen-52378b199/"
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