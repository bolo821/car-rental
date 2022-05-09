/* eslint-disable */
import api from "../config/apiConfig"
import { toast } from "react-toastify";

export const saveLog = data => async dispatch => {
    try {
        const { l1, l2, dropDate, dropVal, pickupDate, pickupVal } = data.redirectData;
        const windowReference = window.open();

        let link;
        if (l1 !== '' || l2 !== '') {
            link = await api.get(`/abbreviation/${l1},${l2}`);
        } else {
            link = {
                data: {
                    url: [ 'https://kayak.com', '' ]
                }
            }
        }
        
        let link1, link2;
        link1 = link.data.url[0];
        link2 = link.data.url[1];

        if (data.sendData.clickid === '') data.sendData = { ...data.sendData, clickid: 'gclid' };

        let url = `${link1}/in?a=kan_242297&enc_cid=${data.sendData.clickid}&url=/cars/${pickupVal}${dropVal ? '/' + dropVal : ''}/${pickupDate}/${dropDate}`;
        windowReference.location = url;
        
        api.post('/log', data.sendData);
    } catch (err) {
        toast.error(err.response.data.message);
    }
}