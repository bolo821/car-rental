import React from 'react';
import {
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
} from "reactstrap";

const Contact = () => {
    return (
        <Container id="contact-id">
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
    )
}

export default Contact;