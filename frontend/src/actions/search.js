import api from "../config/apiConfig";
import { SET_SEARCH_RESULT } from "./";

export const handleSearch = searchKey => dispatch => {
    api.get(`/search/${searchKey}`).then(res => {
        if (res && res.data) {
            dispatch({
                type: SET_SEARCH_RESULT,
                payload: res.data,
            });
        }
    }).catch(err => {
        console.log('error: ', err);
    });
}