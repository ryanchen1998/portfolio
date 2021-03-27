import {
    Navbar,
    Nav,
    Container
} from 'react-bootstrap'

import { motion } from "framer-motion"

function Header() {
    return (
        <Container>
            <Navbar fixed="top" className="nav">
                <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
                <Nav.Link href="#about" className="nav-link">About</Nav.Link>
                <Nav.Link href="#projects" className="nav-link">Projects</Nav.Link>
            </Navbar>
        </Container>
    )
}

export default Header;