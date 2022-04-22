import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendSubscribe } from '../../actions';
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

const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

const Contact = () => {
    const dispatch = useDispatch();
    const [ email, setEmail ] = useState('');
    const [ validate, setValidate ] = useState(false);

    const handleSubscribe = e => {
        e.preventDefault();
        setValidate(true);

        if (validateForm()) {
            dispatch(sendSubscribe(email));
        }
    }

    const validateForm = () => {
        return email !== '' && pattern.test(email);
    }

    return (
        <Container id="contact-id">
            <Row className="justify-content-center py-5">
                <Col lg="8">
                    <Card className="bg-gradient-secondary shadow">
                        <CardBody className="p-lg-5">
                            <h4 className="mb-1">SIGN UP FOR EXCLUSIVE DEALS</h4>
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
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </InputGroup>
                                { validate &&
                                    <>
                                        <label className={`mt-1 text-danger ${email === '' ? 'd-block' : 'd-none'}`}>This is required field.</label>
                                        <label className={`mt-1 text-danger ${email !== '' && !pattern.test(email) ? 'd-block' : 'd-none'}`}>Please input the valid email.</label>    
                                    </>
                                }
                            </FormGroup>
                            <div>
                                <Button
                                    block
                                    className="btn-round"
                                    color="default"
                                    size="lg"
                                    type="button"
                                    onClick={handleSubscribe}
                                >
                                    Subscribe
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