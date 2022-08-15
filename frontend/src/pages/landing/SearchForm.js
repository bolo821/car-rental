import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
    // UncontrolledCarousel,
} from "reactstrap";
import ReactDatetime from "react-datetime";
import AutoCompleteCustom from '../../components/landing/AutoCompleteCustom';
import { handleSearch, saveLog, SET_PICKUP_SEARCH_RESULT, SET_DROP_SEARCH_RESULT } from '../../actions';
import { getDateString, getTimeString, getOffsetDate } from '../../utils/helper';
import { toast } from 'react-toastify';
import { times, /*cars*/ } from './data';
import AirportIcon from '../../assets/img/airplane_icon.svg';
import CityIcon from '../../assets/img/city_icon.svg';

const SearchForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const [ gclid, setGclid ] = useState('');
    const [ l1, setL1 ] = useState('');
    const [ l2, setL2 ] = useState('');
    const [ keyword, setKeyword ] = useState('');

    const pickupCities = useSelector(state => state.search.pickup_cities);
    const pickupAirports = useSelector(state => state.search.pickup_airports);
    const dropCities = useSelector(state => state.search.drop_cities);
    const dropAirports = useSelector(state => state.search.drop_airports);

    const [ showDrop, setShowDrop ] = useState(false);
    const [ pickupSearchKey, setPickupSearchKey ] = useState('');
    const [ pickupVal, setPickupVal ] = useState('');
    const [ pickupCity, setPickupCity ] = useState('');
    const [ pickupCode, setPickupCode ] = useState('');
    const [ pickupCtid, setPickupCtid ] = useState('');
    const [ autoCompleteDataPickup, setAutoCompleteDataPickup ] = useState([]);

    const [ dropSearchKey, setDropSearchKey ] = useState('');
    const [ dropVal, setDropVal ] = useState('');
    const [ dropCity, setDropCity ] = useState('');
    const [ dropCode, setDropCode ] = useState('');
    const [ dropCtid, setDropCtid ] = useState('');
    const [ autoCompleteDataDrop, setAutoCompleteDataDrop ] = useState([]);

    const [ pickupDate, setPickupDate ] = useState(getDateString(getOffsetDate(new Date(), 7)));
    const [ pickupTime, setPickupTime ] = useState('Noon');
    const [ dropDate, setDropDate ] = useState(getDateString(getOffsetDate(new Date(), 14)));
    const [ dropTime, setDropTime ] = useState('Noon');

    const [ showError, setShowError ] = useState(false);

    const handleDropToggle = e => {
        setShowDrop(e.target.checked);
    }

    useEffect(() => {
        if (history.location.search) {
            let param = history.location.search.substring(1, history.location.search.length);
            let params = param.split('&');
            for (let i=0; i<params.length; i++) {
                let key = params[i].split('=')[0];
                let val = params[i].split('=')[1];
    
                if (key === 'gclid') setGclid(val);
                else if (key === 'l1') setL1(val);
                else if (key === 'l2') setL2(val);
                else if (key === 'keyword') setKeyword(val);
            }
        } else {
            history.push('/');
        }
    }, [ history ]);

    useEffect(() => {
        if (pickupSearchKey.length >= 2) {
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
        if (dropSearchKey.length >= 2) {
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

        if (pickupSearchKey.length >= 2) {
            for (let i=0; i<pickupCities.length; i++) {
                tempArr.push({
                    label: pickupCities[i].ar_location_name,
                    icon: CityIcon,
                    city: pickupCities[i].city_name,
                    code: pickupCities[i].iso2 === 'US' ? pickupCities[i].state : pickupCities[i].iso2,
                });
            }
            for (let i=0; i<pickupAirports.length; i++) {
                tempArr.push({
                    label: pickupAirports[i].full_loc,
                    icon: AirportIcon,
                    city: pickupAirports[i].city,
                    code: pickupAirports[i].code,
                    ctid: pickupAirports[i].ctid,
                });
            }
        }

        setAutoCompleteDataPickup(tempArr);
    // eslint-disable-next-line
    }, [ pickupCities, pickupAirports ]);

    useEffect(() => {
        let tempArr = [];

        if (dropSearchKey.length >= 2) {
            for (let i=0; i<dropCities.length; i++) {
                tempArr.push({
                    label: dropCities[i].ar_location_name,
                    icon: CityIcon,
                    city: dropCities[i].city_name,
                    code: dropCities[i].iso2 === 'US' ? dropCities[i].state : dropCities[i].iso2,
                });
            }
            for (let i=0; i<dropAirports.length; i++) {
                tempArr.push({
                    label: dropAirports[i].full_loc,
                    icon: AirportIcon,
                    city: dropAirports[i].city,
                    code: dropAirports[i].code,
                    ctid: dropAirports[i].ctid,
                });
            }
        }

        setAutoCompleteDataDrop(tempArr);
    // eslint-disable-next-line
    }, [ dropCities, dropAirports ]);

    useEffect(() => {
        if (pickupDate) {
            setDropDate(getDateString(getOffsetDate(pickupDate, 8)));
        } else {
            setPickupDate(getDateString(getOffsetDate(new Date(), 28)));
        }
    }, [ pickupDate ]);

    useEffect(() => {
        if (dropDate === null) {
            setDropDate(getDateString(getOffsetDate(pickupDate, 8)));
        }
    // eslint-disable-next-line
    }, [ dropDate ]);

    useEffect(() => {
        let index = calcNextTime(pickupTime);

        if (index === -1) {
            setPickupTime('10:00');
        } else {
            setDropTime(times[index].label);
        }
    }, [ pickupTime ]);

    useEffect(() => {
        let index = calcNextTime(dropTime);

        if (index === -1) {
            setDropTime(times[calcNextTime(pickupTime)].label);
        }
    // eslint-disable-next-line
    }, [ dropTime ]);

    const calcNextTime = curTime => {
        let index = -1;
        for (let i=0; i<times.length; i++) {
            if (times[i].label === curTime) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            return -1;
        } else {
            return (index + 1) % 24;
        }
    }

    const validate = () => {
        if (pickupVal === '' || (showDrop && dropVal === '')) {
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
                    gclid: gclid,
                    keyword: keyword,
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
                    pickupVal: pickupCtid !== '' ? `${pickupCode}-a${pickupCtid}` : `${pickupCity.replace(' ', '-')},${pickupCode}`,
                    dropVal: showDrop ? dropCtid !== '' ? `${dropCode}-a${dropCtid}` : `${dropCity.replace(' ', '-')},${dropCode}` : null,
                    // pickupDate: `${pickupDate}-${pickupTime.substring(0, 2)}h`,
                    pickupDate: `${pickupDate}-12h`,
                    // dropDate: `${dropDate}-${dropTime.substring(0, 2)}h`,
                    dropDate: `${dropDate}-11h`,
                }
        
                dispatch(saveLog({ sendData, redirectData }));
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'SearchComplete'
                });
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
            <Row className="position-relative justify-content-center">
                <Col lg="10" md="10">
                    <Card className="bg-gradient-secondary shadow">
                        <CardBody className="p-lg-5 color-black">
                            <h3 className="mb-1 font-weight-800">Want to rent a car?</h3>
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
                                    <AutoCompleteCustom items={autoCompleteDataPickup} value={pickupVal} setValue={setPickupVal} 
                                        setSearchKey={setPickupSearchKey} setCity={setPickupCity} setCode={setPickupCode}
                                        setCtid={setPickupCtid}
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
                                    <AutoCompleteCustom items={autoCompleteDataDrop} value={dropVal} setValue={setDropVal}
                                        setSearchKey={setDropSearchKey} setCity={setDropCity} setCode={setDropCode}
                                        setCtid={setDropCtid}
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
                                            value={new Date(pickupDate)}
                                            viewDate={new Date(pickupDate)}
                                            isValidDate={currentDate => {
                                                if (currentDate._d < new Date()) return false;
                                                return true;
                                            }}
                                        />
                                    </InputGroup>
                                    <InputGroup className={`input-group-alternative ${showError && pickupTime === '' ? 'error-rt' : ''}`}>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-compass-04" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <AutoCompleteCustom items={times} value={pickupTime} setValue={setPickupTime} />
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
                                            value={new Date(dropDate)}
                                            viewDate={new Date(dropDate)}
                                            isValidDate={currentDate => {
                                                if (currentDate._d < new Date(pickupDate)) return false;
                                                return true;
                                            }}
                                        />
                                    </InputGroup>
                                    <InputGroup className={`input-group-alternative ${showError && dropTime === '' ? 'error-rt' : ''}`}>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ni ni-compass-04" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <AutoCompleteCustom items={times} value={dropTime} setValue={setDropTime} />
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