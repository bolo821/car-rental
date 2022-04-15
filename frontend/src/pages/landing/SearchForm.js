import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import ReactDatetime from "react-datetime";
import Autocomplete from '../../components/landing/AutoComplete';
import { handleSearch } from '../../actions';

const SearchForm = () => {
    const dispatch = useDispatch();
    const searchRes = useSelector(state => state.search);
    const { city, airport } = searchRes;

    const [ showDrop, setShowDrop ] = useState(false);
    const [ searchKey, setSearchKey ] = useState('');
    const [ autoCompleteData, setAutoCompleteData ] = useState([]);

    const handleDropToggle = e => {
        setShowDrop(e.target.checked);
    }

    useEffect(() => {
        if (searchKey.length >= 3) {
            dispatch(handleSearch(searchKey));
        }
    // eslint-disable-next-line
    }, [ searchKey ]);

    useEffect(() => {
        let tempArr = [];
        for (let i=0; i<city.length; i++) {
            tempArr.push({ label: city[i].ar_location_name });
        }
        for (let i=0; i<airport.length; i++) {
            tempArr.push({ label: airport[i].full_loc });
        }

        setAutoCompleteData(tempArr);
    }, [ city, airport ]);

    return (
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
                                    <Autocomplete items={autoCompleteData} searchKey={searchKey} setSearchKey={setSearchKey} />
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
    )
}

export default SearchForm;