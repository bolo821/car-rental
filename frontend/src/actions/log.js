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

        if (data.sendData.gclid === '') data.sendData = { ...data.sendData, gclid: '12345' };
        let currentDate = new Date();
        let dateString = `${currentDate.getUTCFullYear()}-${currentDate.getUTCMonth()+1}-${currentDate.getUTCDate()} ${currentDate.getUTCHours()}:${currentDate.getUTCMinutes()}:${currentDate.getUTCSeconds()}  Asia Jerusalem`;
        let url = `${link1}/in?a=kan_242297&url=/cars/${pickupVal}${dropVal ? '/' + dropVal : ''}/${pickupDate}/${dropDate}&encoder=27_1&enc_pid=deeplinks&enc_cid=${data.sendData.gclid.substring(0, 50)}&enc_lid=${data.sendData.gclid.substring(50, data.sendData.gclid.length)}__${dateString}`;
        windowReference.location = url;
        
        api.post('/log', data.sendData);
    } catch (err) {
        toast.error(err.response.data.message);
    }
}