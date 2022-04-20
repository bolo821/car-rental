import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const About = () => {
    return (
        <>
            <section className="mt-6-rt pt-4">
                <Container>
                    <Row>
                        <Col>
                            <h1>About Us</h1>
                            <p>
                                At Save268.com, our goal is to provide travelers with the most personalized, comprehensive and easy-to-use online research tool. Our philosophy is different from traditional travel websites because we do not ask users to search through mountains of data to find their preferred travel information. In fact, we've turned the process on its head. We ask users for their travel preferences, then, in a matter of seconds, provide unique, unbiased information for the best destinations, hotels, flights, activities and much more.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>
                                How We Do It - We research, you travel™
                            </h2>
                            <p>
                                Today, even the savviest Internet surfers could spend hours, days or weeks figuring out exactly where they want to travel, how to get there and what to do once they finally arrive. That's because the best information is spread out over thousands of sites all over the web.
                            </p>
                            <p>
                                Save268.com has spent years perfecting search technology that scours the web for the most relevant, current and highest quality travel information. To date, we've aggregated over 26 million points of data from sources that include: traveler reviews, expert blogs and websites. But Save268 is much more than research and aggregation.
                            </p>
                            <p>
                                What sets Save268 apart is our ability to analyze, match and reassemble that data quickly and precisely, so that our visitors only get the information that's valuable for them. We are able to do this because our experts have developed cutting-edge artificial intelligence technology. This technology analyzes the preferences a visitor selects and gives unbiased recommendations for a personalized vacation, including the most appropriate destinations, activities, flights, hotels and more!
                            </p>
                            <p>
                                By eliminating the frustrating search process, we are able to save our users the hours, days or weeks that it takes to search for a perfect personalized vacation. At Save268.com, we do the research. You do the traveling!
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default About;