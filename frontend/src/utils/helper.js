export const getDateString = date => {
    if (date === '') return '';
    let cDate = new Date(date);
    if (cDate.toString() === 'Invalid Date') {
        return null;
    }

    let year = cDate.getFullYear();
    let month = cDate.getMonth() + 1;
    if (month < 10) month = `0${month}`;
    let day = cDate.getDate();
    if (day < 10) day = `0${day}`;

    return `${year}-${month}-${day}`;
}

export const getTimeString = date => {
    if (date === '') return '';
    let cDate = new Date(date);
    if (cDate.toString() === 'Invalid Date') {
        return null;
    }

    let hour = cDate.getHours();
    if (hour < 10) hour = `0${hour}`;
    let minute = cDate.getMinutes();
    if (minute < 10) minute = `0${minute}`;
    let second = cDate.getSeconds();
    if (second < 10) second = `0${second}`;

    return `${hour}:${minute}:${second}`;
}