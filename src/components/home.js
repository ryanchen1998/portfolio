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

import { motion } from "framer-motion"

import { 
    AiFillGithub,
    AiOutlineMail,
    AiFillLinkedin, 
} from 'react-icons/ai';

function Home() {
    const [showTooltip, setShowTooltip] = useState(false);

    function copyToClipboard() {
        navigator.clipboard.writeText('RyanChen98@outlook.com');
        setShowTooltip(true);
    };

    useEffect(() => {
        const timerId = setInterval(() => {
        setShowTooltip(false);
        }, 3000);

        return () => clearInterval(timerId);
    },[showTooltip]);

    return (
        <motion.div
            animate={{y:[-100, 0]}}
            transition={{ ease: "easeOut", duration: 2 }}
        >
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
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <AiOutlineMail size="24" color="#b18fcf"/>
                            </motion.div>
                        </Button> 
                    </OverlayTrigger>  
                    <Button
                        variant="icon"
                        size="sm"
                        href="https://github.com/ryanchen1998"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                        <   AiFillGithub size="24" color="#b18fcf"/>
                        </motion.div>
                    </Button> 
                    <Button
                        variant="icon"
                        size="sm"
                        href="https://www.linkedin.com/in/ryan-chen-52378b199/"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <AiFillLinkedin size="24" color="#b18fcf"/>
                        </motion.div>
                    </Button>    
                </Row>
            </Container>
    </motion.div>
    )
}

export default Home;