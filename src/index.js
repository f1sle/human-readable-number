const DICT = {
    100: "hundred",
    90: "ninety",
    80: "eighty",
    70: "seventy",
    60: "sixty",
    50: "fifty",
    40: "forty",
    30: "thirty",
    20: "twenty",
    19: "nineteen",
    18: "eighteen",
    17: "seventeen",
    16: "sixteen",
    15: "fifteen",
    14: "fourteen",
    13: "thirteen",
    12: "twelve",
    11: "eleven",
    10: "ten",
    9: "nine",
    8: "eight",
    7: "seven",
    6: "six",
    5: "five",
    4: "four",
    3: "three",
    2: "two",
    1: "one",
};

module.exports = function toReadable(number) {
    let num = number;
    let result = "";

    if (number === 0) return "zero";

    Object.keys(DICT)
        .reverse()
        .forEach((el) => {
            if (num >= el) {
                let quotient = Math.floor(num / el);
                result +=
                    +el === 100
                        ? `${DICT[quotient]} ${DICT[el]}`
                        : ` ${DICT[el]}`;
                num -= el * quotient;
            }
        });

    return result.trimStart();
};
