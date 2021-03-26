import {
    Container,
    Row,
    Col,
    Card,
    Button,
    CardColumns,
    Badge,
    CardDeck
} from 'react-bootstrap'

import { 
    AiFillGithub,
} from 'react-icons/ai';

function Projects() {
    return (
        <Container id="projects" className="section" fluid>
            <Row>
                <Col>
                    <h1 className="section-title">Projects</h1>
                </Col>
            </Row>
            <Row xs={12} md={12}>
                <Col md={{ span: 8, offset: 2 }} xs={{ span: 10, offset: 1 }}>
                    <CardColumns>
                        <Card>
                            <Card.Img variant="top" src="/images/TravelEA_2.png"/>
                            <Card.Body>
                                <Card.Title>TravelEA</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Row>
                                    <Badge variant="secondary">Java</Badge>
                                    <Badge variant="secondary">Javascript</Badge>
                                    <Badge variant="secondary">HTML</Badge>
                                    <Badge variant="secondary">SQL</Badge>
                                </Row>
                                <Button
                                    variant="icon"
                                    size="sm"
                                    href=""
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="float-right"
                                >
                                    <AiFillGithub size="24" color="#b18fcf"/>
                                </Button>
                            </Card.Footer>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="/images/covidaily.png"/>
                            <Card.Body>
                                <Card.Title>COVIDaily</Card.Title>
                                <Card.Text>
                                COVIDaily tracks relevant statistics for Covid-19 within your country using 
                                GPS location and API data from covid19api.com. It also provides relevant
                                 news articles in your country using newsapi.org.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Row>
                                    <Badge variant="secondary">Kotlin</Badge>
                                </Row>
                                <Button
                                    variant="icon"
                                    size="sm"
                                    href=""
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="float-right"
                                >
                                    <AiFillGithub size="24" color="#b18fcf"/>
                                </Button>
                            </Card.Footer>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="/images/ARphobia.png"/>
                            <Card.Body>
                                <Card.Title>AR Phobia treatment app</Card.Title>
                                <Card.Text>
                                    For my final year honours project, I developed a mobile application for patients 
                                    to face their fears in augmented reality. 
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Row>
                                    <Badge variant="secondary">Unity</Badge>
                                    <Badge variant="secondary">ARFoundation</Badge>
                                    <Badge variant="secondary">C#</Badge>
                                </Row>
                            </Card.Footer>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="/images/internship.jpg"/>
                            <Card.Body>
                                <Card.Title>Konfig-UI</Card.Title>
                                <Card.Text>
                                    During a summer internship I developed a user-interface for 
                                    clients to configure and order radios. This project was intended to 
                                    replace the existing outdated order flow.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Row>
                                    <Badge variant="secondary">React</Badge>
                                    <Badge variant="secondary">Node</Badge>
                                    <Badge variant="secondary">Material-UI</Badge>
                                </Row>
                            </Card.Footer>
                        </Card>

                        <Card>
                            <Card.Img variant="top" src="/images/ucfk.jpg"/>
                            <Card.Body>
                                <Card.Title>Battleships</Card.Title>
                                <Card.Text>
                                    The traditional Battleships game remade on the UC Funkit 4 (a microcontroller kit). 
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Row>
                                    <Badge variant="secondary">C</Badge>
                                </Row>
                                <Button
                                    variant="icon"
                                    size="sm"
                                    href=""
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="float-right"
                                >
                                    <AiFillGithub size="24" color="#b18fcf"/>
                                </Button>
                            </Card.Footer>
                        </Card>
                    </CardColumns>
                </Col>
            </Row>
        </Container>
    )
}

export default Projects;