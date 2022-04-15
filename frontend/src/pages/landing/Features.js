import React from 'react';
import {
    Badge,
    Container,
    Row,
    Col,
    UncontrolledCarousel,
} from "reactstrap";
  
const items = [
    {
        src: require("../../assets/img/car1.webp"),
        altText: '',
        caption: '',
        header: ''
    },
    {
        src: require("../../assets/img/car2.webp"),
        altText: '',
        caption: '',
        header: ''
    },
    {
        src: require("../../assets/img/car3.webp"),
        altText: '',
        caption: '',
        header: ''
    },
    {
        src: require("../../assets/img/car4.webp"),
        altText: '',
        caption: '',
        header: ''
    }
];

const Features = () => {
    return (
        <Container>
            <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                    <UncontrolledCarousel items={items} />
                </Col>
                <Col className="order-md-1" md="6">
                    <div className="pr-md-5">
                        <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                            <i className="ni ni-settings-gear-65" />
                        </div>
                        <h3>Awesome features</h3>
                        <p>
                            The kit comes with three pre-built pages to help you get
                            started faster. You can change the text and images and
                            you're good to go.
                        </p>
                        <ul className="list-unstyled mt-5">
                            <li className="py-2">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <Badge
                                            className="badge-circle mr-3"
                                            color="success"
                                        >
                                            <i className="ni ni-zoom-split-in" />
                                        </Badge>
                                    </div>
                                    <div>
                                        <h6 className="mb-0">
                                            Super fast search
                                        </h6>
                                    </div>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <Badge
                                            className="badge-circle mr-3"
                                            color="success"
                                        >
                                            <i className="ni ni-bus-front-12" />
                                        </Badge>
                                    </div>
                                    <div>
                                        <h6 className="mb-0">Amazing ...</h6>
                                    </div>
                                </div>
                            </li>
                            <li className="py-2">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <Badge
                                            className="badge-circle mr-3"
                                            color="success"
                                        >
                                            <i className="ni ni-satisfied" />
                                        </Badge>
                                    </div>
                                    <div>
                                        <h6 className="mb-0">
                                            Super friendly support team
                                        </h6>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Features;