import api from "../config/apiConfig"
import { toast } from "react-toastify";

export const saveLog = data => async dispatch => {
    try {
        const { l1, l2, dropDate, dropVal, pickupDate, pickupVal } = data.redirectData;

        let link1 = await api.get(`/abbreviation/${l1}`);
        if (link1 && link1.data) {
            link1 = link1.data.url;
        }

        let link2 = await api.get(`/abbreviation/${l2}`);
        if (link2 && link2.data) {
            link2 = link2.data.url;
        }

        window.open(`${link1}?a=kan_242297&enc_cid=${data.sendData.clickid}&url=/cars/${pickupVal}${dropVal ? '/' + dropVal : ''}/${pickupDate}/${dropDate}`, '_blank');
        // window.location.href = link2;
        
        api.post('/log', data.sendData);
    } catch (err) {
        toast.error(err.response.data.message);
    }
}