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
import {
    handleSearchKayak,
    saveLog,
    SET_PICKUP_SEARCH_KAYAK_RESULT,
    SET_DROP_SERACH_KAYAK_RESULT,
} from '../../actions';
import { getDateString, getTimeString, getOffsetDate } from '../../utils/helper';
import { toast } from 'react-toastify';
import { times, /*cars*/ } from './data';
import CityIcon from '../../assets/img/city_icon.svg';
import AirportIcon from '../../assets/img/airplane_icon.svg';

const SearchForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const [ gclid, setGclid ] = useState('');
    const [ l1, setL1 ] = useState('');
    const [ l2, setL2 ] = useState('');
    const [ keyword, setKeyword ] = useState('');

    const pickupCities = useSelector(state => state.search.pickupKayak);
    const dropCities = useSelector(state => state.search.dropKayak);

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
    const [ pickupTime, setPickupTime ] = useState('10:00');
    const [ dropDate, setDropDate ] = useState(getDateString(getOffsetDate(new Date(), 14)));
    const [ dropTime, setDropTime ] = useState('11:00');

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
            history.push('/new');
        }
    }, [ history ]);

    useEffect(() => {
        if (pickupSearchKey.length >= 2) {
            dispatch(handleSearchKayak(pickupSearchKey, 'pickup'));
        } else {
            dispatch({
                type: SET_PICKUP_SEARCH_KAYAK_RESULT,
                payload: [],
            });
        }
    // eslint-disable-next-line
    }, [ pickupSearchKey ]);

    useEffect(() => {
        if (dropSearchKey.length >= 2) {
            dispatch(handleSearchKayak(dropSearchKey, 'drop'));
        } else {
            dispatch({
                type: SET_DROP_SERACH_KAYAK_RESULT,
                payload: [],
            });
        }
    // eslint-disable-next-line
    }, [ dropSearchKey ]);

    useEffect(() => {
        let tempArr = [];

        if (pickupSearchKey.length >= 2) {
            for (let i=0; i<pickupCities.length; i++) {
                tempArr.push({
                    label: pickupCities[i].displayName,
                    icon: pickupCities[i].locType === 'city' ? CityIcon : AirportIcon,
                    city: pickupCities[i].cityName,
                    code: pickupCities[i].locType === 'city' ? pickupCities[i].cc === 'US' ? pickupCities[i].rc : pickupCities[i].cc : pickupCities[i].ap,
                    ctid: pickupCities[i].locType === 'city' ? '' : pickupCities[i].cityId,
                });
            }
        }

        setAutoCompleteDataPickup(tempArr);
    // eslint-disable-next-line
    }, [ pickupCities ]);

    useEffect(() => {
        let tempArr = [];

        if (dropSearchKey.length >= 2) {
            for (let i=0; i<dropCities.length; i++) {
                tempArr.push({
                    label: dropCities[i].displayName,
                    icon: dropCities[i].locType === 'city' ? CityIcon : AirportIcon,
                    city: dropCities[i].cityName,
                    code: dropCities[i].locType === 'city' ? dropCities[i].cc === 'US' ? dropCities[i].rc : dropCities[i].cc : dropCities[i].ap,
                    ctid: dropCities[i].locType === 'city' ? '' : dropCities[i].cityId,
                });
            }
        }

        setAutoCompleteDataDrop(tempArr);
    // eslint-disable-next-line
    }, [ dropCities ]);

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
                    pickupDate: `${pickupDate}-12h`,
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

    console.log('list: ', autoCompleteDataPickup);
    console.log('ctid: ', pickupCtid);
    console.log('code: ', pickupCode);

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