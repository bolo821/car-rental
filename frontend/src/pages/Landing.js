import React, { useState, useEffect } from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledCarousel,
} from "reactstrap";

// layout components
import Navbar from "../components/Navbars/Navbar.js";
import CardsFooter from "../components/Footers/CardsFooter.js";
import ReactDatetime from "react-datetime";

const items = [
  {
    src: require("../assets/img/car1.webp"),
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: require("../assets/img/car2.webp"),
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: require("../assets/img/car3.webp"),
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: require("../assets/img/car4.webp"),
    altText: '',
    caption: '',
    header: ''
  }
];

const Landing = () => {
  const [ showDrop, setShowDrop ] = useState(false);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);

  const handleDropToggle = e => {
    setShowDrop(e.target.checked);
  }

  return (
    <>
      <Navbar />
      <main>
        <div className="position-relative">
          <section className="section section-shaped pb-400">
            <div className="shape shape-style-1 shape-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="6">
                    <h1 className="text-white">
                      Find your cars at once{" "}
                    </h1>
                    <p className="lead text-white">
                      You can easily find a car to rent by one searching. here we can describe more sentences.
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
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
          </section>
          {/* 1st Hero Variation */}
        </div>
        <section className="section">
          <Container>
            <Row className="justify-content-center mt--400">
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <h4 className="mb-1">Want to rent a car?</h4>
                    <p className="mt-0">
                      You can simply do it by simple search.
                    </p>
                    <FormGroup className="mt-4">
                      <label>Pick up location</label>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Enter a city or airport"
                          type="text"
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mt-2 d-flex">
                      <label className="custom-toggle">
                        <input type="checkbox" onChange={handleDropToggle} />
                        <span className="custom-toggle-slider rounded-circle" />
                      </label>
                      <label className="ml-2">Return to a different location</label>
                    </FormGroup>
                    { showDrop &&
                      <FormGroup className="mt-2">
                        <label>Drop off location</label>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Enter a city or airport"
                            type="text"
                          />
                        </InputGroup>
                      </FormGroup>
                    }
                    <FormGroup>
                      <label>Pick up date</label>
                      <div className="d-flex">
                        <InputGroup className="input-group-alternative mr-2">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-calendar-grid-58" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <ReactDatetime
                            inputProps={{
                              placeholder: "Choose your pick up date"
                            }}
                            timeFormat={false}
                          />
                        </InputGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-compass-04" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <ReactDatetime
                            inputProps={{
                              placeholder: "Choose your pick up time"
                            }}
                            dateFormat={false}
                          />
                        </InputGroup>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <label>Drop date</label>
                      <div className="d-flex">
                        <InputGroup className="input-group-alternative mr-2">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-calendar-grid-58" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <ReactDatetime
                            inputProps={{
                              placeholder: "Choose your drop date"
                            }}
                            timeFormat={false}
                          />
                        </InputGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-compass-04" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <ReactDatetime
                            inputProps={{
                              placeholder: "Choose your drop time"
                            }}
                            dateFormat={false}
                          />
                        </InputGroup>
                      </div>
                    </FormGroup>
                    <div>
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        size="lg"
                        type="button"
                      >
                        Search
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section">
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
        </section>
        <section className="section bg-gradient-default">
          <Container className="pt-lg pb-300">
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
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew zindex-100">
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
        </section>
        <section className="section pt-lg-0 section-contact-us">
          <Container>
            <Row className="justify-content-center mt--300">
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <h4 className="mb-1">SIGN UP FOR EXCLUSIVE DEALS</h4>
                    <p className="mt-0">
                      Private access for deals and promotions
                    </p>
                    <FormGroup className="mt-5">
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Your name"
                          type="text"
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email address"
                          type="email"
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Input
                        className="form-control-alternative"
                        cols="80"
                        name="name"
                        placeholder="Type a message..."
                        rows="4"
                        type="textarea"
                      />
                    </FormGroup>
                    <div>
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        size="lg"
                        type="button"
                      >
                        Send Message
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <CardsFooter />
    </>
  );
}

export default Landing;
