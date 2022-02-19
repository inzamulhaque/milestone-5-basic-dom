setInterval(function () {
    // day name
    const dayName = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    // month name
    const monthName = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    // get time
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const currentDate = date.getDate();
    const year = date.getFullYear();
    let hours = date.getHours();
    let status = "AM";
    const minute = date.getMinutes();
    const second = date.getSeconds();

    document.getElementById("day").innerText = currentDate;
    document.getElementById("month").innerText = monthName[month];
    document.getElementById("year").innerText = year;

    if (hours > 12) {
        status = "PM";
        hours -= 12;
    }

    if (hours == 0) {
        hours = 12;
    }

    const hour = addZero(hours);
    const min = addZero(minute);
    const sec = addZero(second);

    // if (hours < 10) {
    //     hours = "0" + hours;
    // }

    // showTime("hour", hour);
    // showTime("min", min);
    // showTime("sec", sec);
    // showTime("status", status);

    showTime("hour", hour);
    showTime("min", min);
    showTime("sec", sec);
    showTime("status", status);

    document.getElementById("dayName").innerText = dayName[day];
}, 1000);

function addZero(timePart) {
    if (timePart < 10) {
        timePart = "0" + timePart;
    }

    return timePart;
}

function showTime(id, value) {
    document.getElementById(id).innerText = value;
}