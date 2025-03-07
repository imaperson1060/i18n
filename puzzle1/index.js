// https://i18n-puzzles.com/puzzle/1
// imaperson1060

const input = require("fs").readFileSync("./input.txt", "utf-8").split(/\r?\n/g);

let bytes = input.map(line => Buffer.byteLength(line)),
    characters = input.map(line => line.length);

let total = 0;
for (let i = 0; i < input.length; i++) {
    if (bytes[i] <= 160 && characters[i] <= 140) total += 13;
    else if (bytes[i] <= 160) total += 11;
    else if (characters[i] <= 140) total += 7;
}

console.log(total);