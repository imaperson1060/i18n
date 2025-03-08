// https://i18n-puzzles.com/puzzle/2
// imaperson1060

const input = require("fs").readFileSync("./input.txt", "utf-8").split(/\r?\n/g);

let times = {};
input.forEach(line => {
    let year = +line.split("T")[0].split("-")[0],
        month = +line.split("T")[0].split("-")[1],
        date = +line.split("T")[0].split("-")[2],
        hour = +line.split("T")[1].split(":")[0],
        minute = +line.split("T")[1].split(":")[1],
        second = +line.split("T")[1].split(":")[2].slice(0, 2),
        offsetDirection = line.split("T")[1].split(":")[2].slice(2, 3),
        offsetHour = +line.split(offsetDirection).at(-1).split(":")[0],
        offsetMinute = +line.split(offsetDirection).at(-1).split(":")[1];
    offsetDirection = offsetDirection == "+" ? -1 : 1;
    hour += offsetDirection * offsetHour;
    minute += offsetDirection * offsetMinute;
    if (minute >= 60) {
        minute -= 60;
        hour++;
    } else if (minute < 0) {
        minute += 60;
        hour--;
    }
    if (hour >= 24) {
        hour -= 24;
        date++;
    } else if (hour < 0) {
        hour += 24;
        date--;
    }
    let time = `${year}-${month.toString().padStart(2, "0")}-${date.toString().padStart(2, "0")}T${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}+00:00`;
    if (!times[time]) times[time] = 1;
    else times[time]++;
});

console.log(Object.keys(times).filter(time => times[time] == 4)[0]);