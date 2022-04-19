import React from 'react';

import {
    Container,
    Row,
    Col,
  } from "reactstrap";

const Partners = () => {
    return (
        <>
            <Container className="pt-lg pb-300" id="partner-id">
                <Row className="text-center justify-content-center">
                    <Col lg="10">
                        <h2 className="display-3 text-white">Meet Our Partners</h2>
                        <p className="lead text-white">
                            To contribute to positive change and achieve our sustainability goals, we partner with many extraordinary organizations around the world. Their expertise enables us to do far more than we could alone, and their passion and talent inspire us. It is our pleasure to introduce you to a handful of the organizations whose accomplishments and commitments are representative of all the organizations we are fortunate to call our partners.
                        </p>
                    </Col>
                </Row>
                <Row className="row-grid mt-5">
                    <div className="row d-flex flex-wrap justify-content-center">
                        <div className=" text-center partnerimg">
                            <img src="https://autorentals247.com/deals/wp-content/uploads/2021/12/Enterprise-14.12.21.webp" alt="" className="partner_logo img img-fluid wow fadeInUp animated" data-wow-delay="0.5s" data-wow-offset="200" width="150" height="100" />
                        </div>
                        <div className=" text-center partnerimg">
                            <img src="https://autorentals247.com/deals/wp-content/uploads/2021/12/Hertz-14.12.21.webp" alt="" className="partner_logo img img-fluid wow fadeInUp animated" data-wow-delay="0.5s" data-wow-offset="200" width="150" height="106" />
                        </div>
                        <div className=" text-center partnerimg">
                            <img src="https://autorentals247.com/deals/wp-content/uploads/2021/12/Avis-14.12.21.webp" alt="" className="partner_logo img img-fluid wow fadeInUp animated" data-wow-delay="0.5s" data-wow-offset="200" width="150" height="90" />
                        </div>
                        <div className=" text-center partnerimg">
                            <img src="https://autorentals247.com/deals/wp-content/uploads/2021/12/National-14.12.21.webp" alt="" className="partner_logo img img-fluid wow fadeInUp animated" data-wow-delay="0.5s" data-wow-offset="200" width="150" height="111" />
                        </div>
                        <div className=" text-center partnerimg">
                            <img src="https://autorentals247.com/deals/wp-content/uploads/2021/12/Alamo-14.12.21.webp" alt="" className="partner_logo img img-fluid wow fadeInUp animated" data-wow-delay="0.5s" data-wow-offset="200" width="150" height="92" />
                        </div>
                        <div className=" text-center partnerimg">
                            <img src="https://autorentals247.com/deals/wp-content/uploads/2021/12/Budget-14.12.21.webp" alt="" className="partner_logo img img-fluid wow fadeInUp animated" data-wow-delay="0.5s" data-wow-offset="200" width="150" height="100" />
                        </div>
                        <div className=" text-center partnerimg">
                            <img src="https://autorentals247.com/deals/wp-content/uploads/2021/12/Europcar_logo-14.12.21.webp" alt="" className="partner_logo img img-fluid wow fadeInUp animated" data-wow-delay="0.5s" data-wow-offset="200" width="150" height="86" />
                        </div>
                        <div className=" text-center partnerimg">
                            <img src="https://autorentals247.com/deals/wp-content/uploads/2021/12/Sixt-14.12.21.webp" alt="" className="partner_logo img img-fluid wow fadeInUp animated" data-wow-delay="0.5s" data-wow-offset="200" width="150" height="100" />
                        </div>
                        <div className=" text-center partnerimg">
                            <img src="https://autorentals247.com/deals/wp-content/uploads/2021/12/Dollar-14.12.21.webp" alt="" className="partner_logo img img-fluid wow fadeInUp animated" data-wow-delay="0.5s" data-wow-offset="200" width="150" height="90" />
                        </div>
                        <div className=" text-center partnerimg">
                            <img src="https://autorentals247.com/deals/wp-content/uploads/2021/12/Thrifty-14.12.21.webp" alt="" className="partner_logo img img-fluid wow fadeInUp animated" data-wow-delay="0.5s" data-wow-offset="200" width="150" height="86" />
                        </div>
                    </div>
                </Row>
            </Container>
            <div className="separator separator-bottom separator-skew zindex-100">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon className="fill-white" points="2560 0 2560 100 0 100" />
                </svg>
            </div>
        </>
    )
}

export default Partners;