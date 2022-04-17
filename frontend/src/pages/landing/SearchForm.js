import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    Button,
    Card,
    CardBody,
    FormGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
} from "reactstrap";
import ReactDatetime from "react-datetime";
import Autocomplete from '../../components/landing/AutoComplete';
import { handleSearch, saveLog, SET_PICKUP_SEARCH_RESULT, SET_DROP_SEARCH_RESULT } from '../../actions';
import { getDateString, getTimeString } from '../../utils/helper';
import { toast } from 'react-toastify';

const SearchForm = () => {
    const dispatch = useDispatch();
    const { clickid, l1, l2 } = useParams();
    const pickupCities = useSelector(state => state.search.pickup_cities);
    const pickupAirports = useSelector(state => state.search.pickup_airports);
    const dropCities = useSelector(state => state.search.drop_cities);
    const dropAirports = useSelector(state => state.search.drop_airports);

    const [ showDrop, setShowDrop ] = useState(false);
    const [ pickupSearchKey, setPickupSearchKey ] = useState('');
    const [ pickupVal, setPickupVal ] = useState('');
    const [ dropSearchKey, setDropSearchKey ] = useState('');
    const [ dropVal, setDropVal ] = useState('');
    const [ autoCompleteDataPickup, setAutoCompleteDataPickup ] = useState([]);
    const [ autoCompleteDataDrop, setAutoCompleteDataDrop ] = useState([]);

    const [ pickupDate, setPickupDate ] = useState('');
    const [ pickupTime, setPickupTime ] = useState('');
    const [ dropDate, setDropDate ] = useState('');
    const [ dropTime, setDropTime ] = useState('');

    const [ showError, setShowError ] = useState(false);

    const handleDropToggle = e => {
        setShowDrop(e.target.checked);
    }

    useEffect(() => {
        if (pickupSearchKey.length >= 3) {
            dispatch(handleSearch(pickupSearchKey, 'pickup'));
        } else {
            dispatch({
                type: SET_PICKUP_SEARCH_RESULT,
                payload: {
                    city: [],
                    airport: [],
                },
            });
        }
    // eslint-disable-next-line
    }, [ pickupSearchKey ]);

    useEffect(() => {
        if (dropSearchKey.length >= 3) {
            dispatch(handleSearch(dropSearchKey, 'drop'));
        } else {
            dispatch({
                type: SET_DROP_SEARCH_RESULT,
                payload: {
                    city: [],
                    airport: [],
                },
            });
        }
    // eslint-disable-next-line
    }, [ dropSearchKey ]);

    useEffect(() => {
        let tempArr = [];
        for (let i=0; i<pickupCities.length; i++) {
            tempArr.push({ label: pickupCities[i].ar_location_name });
        }
        for (let i=0; i<pickupAirports.length; i++) {
            tempArr.push({ label: pickupAirports[i].full_loc });
        }

        setAutoCompleteDataPickup(tempArr);
    }, [ pickupCities, pickupAirports ]);

    useEffect(() => {
        let tempArr = [];
        for (let i=0; i<dropCities.length; i++) {
            tempArr.push({ label: dropCities[i].ar_location_name });
        }
        for (let i=0; i<dropAirports.length; i++) {
            tempArr.push({ label: dropAirports[i].full_loc });
        }

        setAutoCompleteDataDrop(tempArr);
    }, [ dropCities, dropAirports ]);

    const validate = () => {
        if (pickupVal === '' || (showDrop && dropVal === '') || pickupDate === '' || dropDate === '' || pickupDate === null || dropDate === null || pickupTime === null || dropTime === null) {
            return 0;
        } else if (pickupDate > dropDate) {
            return 1;
        } else if (pickupDate < `${getDateString(new Date())} ${getTimeString(new Date())}`) {
            return 2;
        } else {
            return 100;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        setShowError(true);
        switch (validate()) {
            case 100: {
                let sendData = {
                    clickid: clickid,
                    pickup: {
                        searchKey: pickupSearchKey,
                        searchResults: autoCompleteDataPickup.map(ele => ele.label),
                        result: pickupVal,
                    },
                    drop: {
                        searchKey: dropSearchKey,
                        searchResults: autoCompleteDataDrop.map(ele => ele.label),
                        result: dropVal,
                    },
                }
                let redirectData = {
                    l1: l1,
                    l2: l2,
                    pickupVal: pickupVal,
                    dropVal: dropVal,
                    pickupDate: pickupTime !== '' ? `${pickupDate} ${pickupTime}` : `${pickupDate} 00:00:00`,
                    dropDate: dropTime !== '' ? `${dropDate} ${dropTime}` : `${dropDate} 23:59:59`,
                }
        
                dispatch(saveLog({ sendData, redirectData }));
                return;
            }
            case 0: {
                toast.warn('Please fill all required fields with valid values.');
                return;
            }
            case 1: {
                toast.warn('Pick up date cannot be bigger than drop down date.');
                return;
            }
            case 2: {
                toast.warn('Pick up date cannot be sooner than current time.');
                return;
            }
            default: {
                return;
            }
        }
    }

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
                                <InputGroup className={`input-group-alternative ${showError && pickupVal === '' ? 'error-rt' : ''}`}>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-user-run" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Autocomplete items={autoCompleteDataPickup} value={pickupVal} setValue={setPickupVal} 
                                        setSearchKey={val => {setPickupSearchKey(val)}}
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
                                <InputGroup className={`input-group-alternative ${showError && dropVal === '' ? 'error-rt' : ''}`}>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-user-run" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Autocomplete items={autoCompleteDataDrop} value={dropVal} setValue={setDropVal}
                                        setSearchKey={val => {setDropSearchKey(val)}}
                                    />
                                </InputGroup>
                            </FormGroup>
                            }
                            <FormGroup>
                                <label>Pick up date</label>
                                <div className="d-flex">
                                    <InputGroup className={`input-group-alternative mr-2 ${showError && (pickupDate === '' || pickupDate === null) ? 'error-rt' : ''}`}>
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
                                            onChange={e => setPickupDate(getDateString(e._d))}
                                            closeOnSelect
                                        />
                                    </InputGroup>
                                    <InputGroup className={`input-group-alternative ${showError && pickupTime === null ? 'error-rt' : ''}`}>
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
                                            onChange={e => setPickupTime(getTimeString(e._d))}
                                            closeOnSelect
                                        />
                                    </InputGroup>
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <label>Drop date</label>
                                <div className="d-flex">
                                    <InputGroup className={`input-group-alternative mr-2 ${showError && (dropDate === '' || dropDate === null) ? 'error-rt' : ''}`}>
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
                                            onChange={e => setDropDate(getDateString(e._d))}
                                            closeOnSelect
                                        />
                                    </InputGroup>
                                    <InputGroup className={`input-group-alternative ${showError && dropTime === null ? 'error-rt' : ''}`}>
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
                                            onChange={e => setDropTime(getTimeString(e._d))}
                                            closeOnSelect
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
                                    onClick={handleSubmit}
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