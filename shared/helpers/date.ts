const leadingZero = (value: string) => value.padStart(2, '0')

export const transformDateToString = (date: Date): string => {
    var dd = String(date.getDate());
    var mm = String(date.getMonth() + 1);
    var yyyy = date.getFullYear();

    return  yyyy + '-' + leadingZero(mm) + '-' + leadingZero(dd);
}

export const transformDateTimeToString = (date: Date): string => {
    const hh = String(date.getHours())
    const mm = String(date.getMinutes())

    return transformDateToString(date) + "T" + leadingZero(hh) + ":" + leadingZero(mm)
}