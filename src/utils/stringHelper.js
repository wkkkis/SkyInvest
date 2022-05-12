export const numberWithSpaces = (s, valute, currency = true) =>
    (s &&
        `${s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${
            currency ? valute : ""
        }`) ||
    "";

export const dateFormatter = (date) => {
    if (date.getFullYear() === 1) return "-";
    let dd = date.getDate().toString();
    let mm = (date.getMonth() + 1).toString();
    let yyyy = date.getFullYear();

    if (parseInt(dd) < 10) {
        dd = "0" + dd;
    }

    if (parseInt(mm) < 10) {
        mm = "0" + mm;
    }
    return `${dd}.${mm}.${yyyy}`;
};
