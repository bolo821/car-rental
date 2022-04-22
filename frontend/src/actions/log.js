/* eslint-disable */
import api from "../config/apiConfig"
import { toast } from "react-toastify";

export const saveLog = data => async dispatch => {
    try {
        const { l1, l2, dropDate, dropVal, pickupDate, pickupVal } = data.redirectData;
        const windowReference = window.open();

        let link = await api.get(`/abbreviation/${l1},${l2}`);
        let link1, link2;
        if (link && link.data) {
            link1 = link.data.url[0];
            link2 = link.data.url[1];
        }

        let url = `${link1}?a=kan_242297&enc_cid=${data.sendData.clickid}&url=/cars/${pickupVal}${dropVal ? '/' + dropVal : ''}/${pickupDate}/${dropDate}`;
        // window.open(url, '_blank');
        // window.location.href = link2;
        windowReference.location = url;
        
        api.post('/log', data.sendData);
    } catch (err) {
        toast.error(err.response.data.message);
    }
}