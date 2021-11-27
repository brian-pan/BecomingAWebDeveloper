const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

const languageCode = franc(process.argv[2]);
// console.log(franc(process.argv[2]));

if (languageCode === 'und') {
    console.log("Sorry, can't figure out the language, a larger dataset is required.".red)
} else {
    const language = langs.where('3', languageCode);
    console.log(`Lauguage: ${language.name.green}`);
}

