import { toast } from "react-toastify";
import api from "../config/apiConfig";

export const sendSubscribe = email => dispatch => {
    api.post(`/email`, { email }).then(res => {
        toast.success('Successfully subscribed!');
    }).catch(err => {
        toast.error(err.response.data.message);
    });
}