import {
    SET_SEARCH_RESULT,
} from '../actions'

const defaultState = {
    city: [],
    airport: [],
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case SET_SEARCH_RESULT: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state
    }
}