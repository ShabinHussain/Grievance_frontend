import React from 'react'
import '../pages/Common.css'
import { Card, Col, Row } from 'react-bootstrap'
import Header from '../components/Header'
import About_component from '../components/About_component'
import Footer from '../components/Footer'




function About() {
    return (
        <>
            <div className='abt1 bg-dark' style={{ height: '180vh' }}>
                <Row>
                    

                  
                        <Header />
                   
                </Row>
                <div className='row' style={{ height: '40%' }}>
                    <h1 className='Abtpanther pt-3 text-white'>About</h1>
                    <img src="/panther.png" alt="no image" />
                </div>
                <Row className='mt-5'>
                    <Col md='6' className='mt-5'>
                        <Row className='mt-5'>
                            <Col md='2'></Col>
                            <Col md='8'>
                                <Card  className='mt-5 shadow crd2 w-100'>
                                    <Card.Body>
                                        <Card.Title>Meet Panther</Card.Title>
                                        <Card.Text>
                                            Captain Justice, a symbol of courage and fairness, emerged from the shadows to champion the cause of justice. Born out of a deep commitment to equality and transparency, Captain Justice dedicates their powers to addressing grievances and fighting against injustice.
                                        </Card.Text>
                                        <Card.Text>
                                            From the bustling streets of Metropolis to the quiet corners of small towns, Captain Justice has always been there to lend a hand and a voice. Their journey began with a personal experience of injustice, which ignited a lifelong mission to create a world where everyone is treated with respect and fairness.

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card  className='mt-5 shadow crd2 w-100'>
                                    <Card.Body>
                                        <Card.Title>Our Mission</Card.Title>
                                        <Card.Text>
                                            Our mission is simple yet profound: to ensure that every individual's voice is heard and every grievance is addressed with transparency and empathy. Captain Justice is dedicated to providing a platform where grievances are met with action and resolution, fostering a community built on trust and integrity.

                                        </Card.Text>
                                        <Card.Text>
                                            We believe in the power of collective action and strive to create an environment where everyone can participate in the fight against injustice. With a commitment to swift and effective responses, Captain Justice aims to be a champion for fairness in all spheres of life.

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md='2'></Col>
                        </Row>

                    </Col>
                    <Col md='6' className='mt-5'>
                        <Row className='mt-5'>
                            <Col md='1'></Col>
                            <Col md='8'>
                                <Card  className='mt-5 shadow crd2 w-100'>
                                    <Card.Body>
                                        <Card.Title>The Journey of Captain Justice</Card.Title>
                                        <Card.Text>
                                            Captain Justice's story is one of resilience and resolve. Born from a profound sense of justice, Captain Justice embarked on a journey to address issues that many others overlooked. Their path has been marked by significant challenges and triumphs, each contributing to their unwavering commitment to fairness.

                                        </Card.Text>
                                        <Card.Text>
                                            Over the years, Captain Justice has tackled high-profile cases, advocated for policy changes, and supported countless individuals in their quest for justice. Their journey is a testament to the belief that one person can make a difference and inspire change.

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card  className='mt-5 shadow crd2 w-100'>
                                    <Card.Body>
                                        <Card.Title>Core Values</Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li><strong>Integrity:</strong> Integrity is the cornerstone of our work. We adhere to the highest ethical standards, ensuring that all our actions are transparent and honest. </li>

                                                <li><strong>Transparency:</strong> Transparency is essential to fostering trust and accountability. We are committed to being open about our processes,  and the outcomes of our actions. </li>

                                                <li><strong>Action:</strong> We believe that action speaks louder than words. Our commitment to taking decisive and effective action means addressing grievances promptly and working towards tangible solutions. </li>


                                            </ul>
                                        </Card.Text>
                                        <Card.Text>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md='3'></Col>
                        </Row>

                    </Col>
                </Row>
            </div>
            <Footer/>
        </>
    )
}

export default About