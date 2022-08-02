let secondPartOfTens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];
let ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];
let tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];
let hundred = "  hundred  ";
let trimHundred = hundred.trim();

module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }
    if (number < 10) {
        return ones[number];
    }
    if (number >= 10 && number < 20) {
        return secondPartOfTens[number % 10];
    }
    if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            return tens[number / 10];
        } else {
            return (
                tens[Math.trunc(number / 10)].trim() + " " + ones[number % 10]
            );
        }
    }
    if (number >= 100 && number < 1000) {
        if (number % 100 === 0) {
            return ones[number / 100] + " " + trimHundred;
        } else if (Math.trunc((number % 100) / 10) === 1) {
            return (
                ones[Math.trunc(number / 100)] +
                " " +
                trimHundred +
                " " +
                secondPartOfTens[number % 10]
            );
        } else if (Math.trunc((number % 100) / 10) === 0) {
            return (
                ones[Math.trunc(number / 100)] +
                " " +
                trimHundred +
                " " +
                ones[number % 10]
            );
        } else {
            return `${ones[Math.trunc(number / 100)]} ${trimHundred} ${
                tens[Math.trunc((number % 100) / 10)]
            } ${ones[number % 10]}`.trim();
        }
    }
};
