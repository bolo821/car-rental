import api from "../config/apiConfig";
import { SET_PICKUP_SEARCH_RESULT, SET_DROP_SEARCH_RESULT } from "./";

export const handleSearch = (searchKey, type) => dispatch => {
    api.get(`/search/${searchKey}`).then(res => {
        if (res && res.data) {
            if (type === 'pickup') {
                dispatch({
                    type: SET_PICKUP_SEARCH_RESULT,
                    payload: res.data,
                });
            } else if (type === 'drop') {
                dispatch({
                    type: SET_DROP_SEARCH_RESULT,
                    payload: res.data,
                })
            }
        }
    }).catch(err => {
        console.log('error: ', err);
    });
}