import {
    SET_PICKUP_SEARCH_RESULT,
    SET_DROP_SEARCH_RESULT,
    SET_PICKUP_SEARCH_KAYAK_RESULT,
    SET_DROP_SERACH_KAYAK_RESULT,
} from '../actions'

const defaultState = {
    pickup_cities: [],
    pickup_airports: [],
    drop_cities: [],
    drop_airports: [],
    pickupKayak: [],
    dropKayak: [],
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case SET_PICKUP_SEARCH_RESULT: {
            return {
                ...state,
                pickup_cities: action.payload.city,
                pickup_airports: action.payload.airport,
            }
        }
        case SET_DROP_SEARCH_RESULT: {
            return {
                ...state,
                drop_cities: action.payload.city,
                drop_airports: action.payload.airport,
            }
        }
        case SET_PICKUP_SEARCH_KAYAK_RESULT: {
            return {
                ...state,
                pickupKayak: action.payload,
            }
        }
        case SET_DROP_SERACH_KAYAK_RESULT: {
            return {
                ...state,
                dropKayak: action.payload,
            }
        }
        default:
            return state
    }
}