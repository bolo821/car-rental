import React from 'react';
import {
    Container,
    Row,
    Col,
} from "reactstrap";
import EnterpriseImg from '../../assets/img/partners/enterprise.webp';
import HertzImg from '../../assets/img/partners/hertz.webp';
import AvisImg from '../../assets/img/partners/avis.webp';
import NationalImg from '../../assets/img/partners/national.webp';
import AlamoImg from '../../assets/img/partners/alamo.webp';
import BudgetImg from '../../assets/img/partners/budget.webp';
import EuropcarImg from '../../assets/img/partners/europcar.webp';
import SixtImg from '../../assets/img/partners/sixt.webp';
import DollarImg from '../../assets/img/partners/dollar.webp';
import ThriftyImg from '../../assets/img/partners/thrifty.webp';

const Partners = () => {
    return (
        <>
            <Container id="partner-id">
                <Row className="text-center justify-content-center">
                    <Col lg="10">
                        <h2 className="display-3">Meet Our Partners</h2>
                    </Col>
                </Row>
                <Row className="row-grid justify-content-center">
                    <div className="text-center partnerimg">
                        <img src={EnterpriseImg} alt="" className="partner_logo img img-fluid wow fadeInUp animated" data-wow-delay="0.5s" data-wow-offset="200" width="150" height="100" />
                    </div>
                    <div className="text-center partnerimg">
                        <img src={HertzImg} alt="" className="partner_logo img img-fluid wow fadeInUp animated" data-wow-delay="0.5s" data-wow-offset="200" width="150" height="106" />
                    </div>
                    <div className="text-center partnerimg">
                        <img src={AvisImg} alt="" className="partner_logo img img-fluid wow fadeInUp animated" data-wow-delay="0.5s" data-wow-offset="200" width="150" height="90" />
                    </div>
                    <div className="text-center partnerimg">
                        <img src={NationalImg} alt="" className="partner_logo img img-fluid wow fadeInUp animated" data-wow-delay="0.5s" data-wow-offset="200" width="150" height="111" />
                    </div>
                    <div className="text-center partnerimg">
                        <img src={AlamoImg} alt="" className="partner_logo img img-fluid wow fadeInUp animated" data-wow-delay="0.5s" data-wow-offset="200" width="150" height="92" />
                    </div>
                    <div className="text-center partnerimg">
                        <img src={BudgetImg} alt="" className="partner_logo img img-fluid wow fadeInUp animated" data-wow-delay="0.5s" data-wow-offset="200" width="150" height="100" />
                    </div>
                    <div className="text-center partnerimg">
                        <img src={EuropcarImg} alt="" className="partner_logo img img-fluid wow fadeInUp animated" data-wow-delay="0.5s" data-wow-offset="200" width="150" height="86" />
                    </div>
                    <div className="text-center partnerimg">
                        <img src={SixtImg} alt="" className="partner_logo img img-fluid wow fadeInUp animated" data-wow-delay="0.5s" data-wow-offset="200" width="150" height="100" />
                    </div>
                    <div className="text-center partnerimg">
                        <img src={DollarImg} alt="" className="partner_logo img img-fluid wow fadeInUp animated" data-wow-delay="0.5s" data-wow-offset="200" width="150" height="90" />
                    </div>
                    <div className="text-center partnerimg">
                        <img src={ThriftyImg} alt="" className="partner_logo img img-fluid wow fadeInUp animated" data-wow-delay="0.5s" data-wow-offset="200" width="150" height="86" />
                    </div>
                </Row>
                <Row>
                    <Col>
                        <p className="lead text-center">
                            To contribute to positive change and achieve our sustainability goals, we partner with many extraordinary organizations around the world. Their expertise enables us to do far more than we could alone, and their passion and talent inspire us. It is our pleasure to introduce you to a handful of the organizations whose accomplishments and commitments are representative of all the organizations we are fortunate to call our partners.
                        </p>
                    </Col>
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