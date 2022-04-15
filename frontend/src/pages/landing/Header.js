import React from 'react';
import {
    Container,
    Row,
    Col,
} from "reactstrap";

const Header = () => {
    return (
        <>
            <div className="shape shape-style-1 shape-default">
                <span /><span /><span /><span />
                <span /><span /><span /><span /><span />
            </div>
            <Container className="py-lg-md d-flex">
                <div className="col px-0">
                    <Row>
                        <Col lg="6">
                            <h1 className="text-white">Find your cars at once{" "}</h1>
                            <p className="lead text-white">
                                You can easily find a car to rent by one searching. here we can describe more sentences.
                            </p>
                        </Col>
                    </Row>
                </div>
            </Container>
            <div className="separator separator-bottom separator-skew">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                        className="fill-white"
                        points="2560 0 2560 100 0 100"
                    />
                </svg>
            </div>
        </>
    )
}

export default Header;