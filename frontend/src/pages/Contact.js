import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Contact = () => {
    return (
        <>
            <section className="mt-6-rt pt-4">
                <Container>
                    <Row>
                        <Col>
                            <h1>Contact Us:</h1>
                            <p>
                                All comments on our websites are welcomed!                                
                            </p>
                            <p>
                                Feel free to contact us with any ideas, questions or potential business opportunities.
                                <br />Fill the form or send your thoughts to:
                            </p>
                            <p>
                                <a className='text-black' href="mailto:info@save268.com">info@save268.com</a>
                            </p>
                            <p>
                                <span className='d-block'>114 Hayarkon Street</span>
                                <span className='d-block'>Tel Aviv, Israel</span>
                                <span className='d-block'>6357302</span>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>
                                PLEASE NOTE: We are not a car rental agency!
                            </h2>
                            <p>
                                We don't take bookings on our website but refer people to other websites / travel agencies in order to make travel bookings.
                            </p>
                            <p>
                                Nor do we hold any information on who you booked with.
                            </p>
                            <p>
                                So if you have a specific travel query, a complaint about your car rental - this is not the place to do it!
                            </p>
                            <p>
                                We suggest you contact the relevant travel provider / car rental agency directly.
                            </p>
                            <p>
                                <span className='d-block'>Happy Travels!</span>
                                <span className='d-block'>The Save268 Team.</span>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contact;