export const numberWithSpaces = (s, valute, currency = true) =>
    (s &&
        `${s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${
            currency ? valute : ""
        }`) ||
    "";

export const dateFormatter = (date, withTime = false) => {
    if (date.getFullYear() === 1) return "-";
    let dd = date.getDate().toString();
    let mm = (date.getMonth() + 1).toString();
    let yyyy = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    if (parseInt(dd) < 10) {
        dd = "0" + dd;
    }

    if (parseInt(mm) < 10) {
        mm = "0" + mm;
    }

    if (parseInt(hour) < 10) {
        hour = "0" + hour;
    }

    if (parseInt(minutes) < 10) {
        minutes = "0" + minutes;
    }

    return `${dd}.${mm}.${yyyy} ${withTime ? `${hour}:${minutes}` : ``}`;
};

export const checkIfFirstLetterInLowerCase = (text) => {
    const firstChar = text.charAt(0);
    if (firstChar === firstChar.toLowerCase()) {
        return true;
    } else {
        return false;
    }
};

export function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
