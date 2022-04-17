import api from "../config/apiConfig"
import { toast } from "react-toastify";

export const saveLog = data => async dispatch => {
    try {
        const saveRes = await api.post('/log', data.sendData);
        if (saveRes && saveRes.data) {
            const { l1, l2, dropDate, dropVal, pickupDate, pickupVal } = data.redirectData;

            let link1 = await api.get(`/abbreviation/${l1}`);
            if (link1 && link1.data) {
                link1 = link1.data.url;
            }

            let link2 = await api.get(`/abbreviation/${l2}`);
            if (link2 && link2.data) {
                link2 = link2.data.url;
            }

            window.open(`${link1}?a=unknown&url=/cars/${pickupVal}/${dropVal}/${pickupDate}/${dropDate}`, '_blank');
            window.location.href = link2;
        }
    } catch (err) {
        toast.error(err.response.data.message);
    }
}