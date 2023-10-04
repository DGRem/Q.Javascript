const dynastyReign = [
{"San Dynasty": "MXLI"},
{"Viloria Dynasty": "MCCCIIII"},
{"Tan Dynasty": "MCCCXCVIII"},
{"Bon Dynasty": "MCDXLV"},
{"Maiko Dynasty": "MDCLXIV"},
{"Paul Dynasty": "MCMXLIX"},
{"Andre Dynasty": "MCMXCIX"}
];

const currentYear = "MCMLXXIX"; // Current Year

const convertYear = (romanNumeral) => {
const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
const integerValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

let result = 0;

    for (let j = 0; j < romanNumerals.length; j++) {
        while (romanNumeral.indexOf(romanNumerals[j]) === 0) {
            result += integerValues[j];
            romanNumeral = romanNumeral.replace(romanNumerals[j], "");
        }
    }

    if (romanNumeral !== "") {
        return "Invalid";
    }

return result;
};

const yearsReigned = (entry, nextEntry, currentYear) => {
const dynastyName = Object.keys(entry)[0];
const romanNumeral = entry[dynastyName];
const endYear = convertYear(romanNumeral);

    if (endYear === "Invalid") {
        return "Invalid";
    }

    const nextDynastyName = Object.keys(nextEntry)[0];
    const nextRomanNumeral = nextEntry[nextDynastyName];
    const nextStartYear = convertYear(nextRomanNumeral);

    if (nextStartYear === "Invalid") {
        return "Invalid";
    }

const yearsReigning = nextStartYear - endYear - 1;
const startYear = endYear + 1;

return { yearsReigning, startYear };
};

const longestDynasty = (dynastyReign, currentYear) => {
    if (dynastyReign.length === 0) {
        return "No Data";
    }

    const convertedDynasties = [];

    for (let i = 0; i < dynastyReign.length - 1; i++) {
        const entry = dynastyReign[i];
        const nextEntry = dynastyReign[i + 1];
        const dynastyName = Object.keys(entry)[0];
        const { yearsReigning, startYear } = yearsReigned(entry, nextEntry, currentYear);
        convertedDynasties.push({ dynastyName, yearsReigning, startYear });
    }

const sortedDynasties = convertedDynasties.sort((a, b) => b.yearsReigning - a.yearsReigning);
const longestReigningDynasty = sortedDynasties[0];

    return longestReigningDynasty;
};

const longestReigningDynastyResult = longestDynasty(dynastyReign, currentYear);
console.log("Longest Reigning Dynasty:", longestReigningDynastyResult.dynastyName);
console.log("Years Reigning:", longestReigningDynastyResult.yearsReigning);
console.log("Start Year:", longestReigningDynastyResult.startYear);
