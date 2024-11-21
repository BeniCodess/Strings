//  PLAIN STRING METOHDS

// 1. length
const paragraph = "I am a girl and i attend codelab training facility and i am learning Javascript";
console.log(paragraph.length);

// 2.toLowerCase
const personalEmail = "PRINCEJOHN@MAIL.COM";
console.log(personalEmail.toLowerCase());

// 3. toUpperCase
const companyEmail = "princejohn@mail.com";
console.log(companyEmail.toUpperCase());

// 4. trim, trimEnd, trimStart
const text = " Hello and you are welcome to codelab today ";
console.log(text.trim()); 
console.log(text.trimEnd());
console.log(text.trimStart());

// 5. valueOf
const textII = "Lets work and achieve great things";
console.log(textII.valueOf());

console.clear()

// ARGUEMENT STRING METHODS

// 6. charAt and charCodeAt
const aboutJs =  "Javascript is a programming language used to build interactive web application";
console.log("checking charAt =",aboutJs.charAt(14));
console.log("checking charCodeAt =",aboutJs.charCodeAt(8));

// // 7. concat
// const aboutJsII = " It is the engine of a web application";
// console.log("checking concat = ", aboutJs.concat(aboutJsII));

// console.clear()
// const firstName = "BENITA";
// const lastName = "FAITH";
// const at = "@";
// const company = "Codelaborganization";
// const domain = ".com";
// console.log("checking concat =", firstName.concat(lastName).concat(at).concat(company).concat(domain).toLowerCase());

// // 8. split
// const valuedGuests = "Daniel, and, Chioma, are, esteemed, guests, for, the, charity, event.";
// const todaysdate = "20/07/2024"
// console.log("checking concat = ", valuedGuests.split());
// console.log("checking concat = ", valuedGuests.split(""));
// console.log("checking concat = ", valuedGuests.split(" "));
// console.log("checking concat = ", valuedGuests.split(" "));
// console.log("checking concat = ", todaysdate.split("/"));

// // 8.slice
// const eventTime = "The charity events start at 11:00am prompt"
// console.log("checking slice = ", eventTime.slice(0, 11))
// console.log("checking slice = ", eventTime.slice(29, 36))
// console.log("checking slice = ", eventTime.slice(36, 43)) 

// //9. startwith, and endwith
// const agenda = "The charity events is to raise money for rural communities";
// console.log("checking startsWith = ", agenda.startsWith("The"));
// console.log("checking endsWith = ", agenda.endsWith("communities"));
// console.log()
// // 10 replace and replacesAll
// const simpleEssay = "He was held at gun point at the bus-stop. Thank God the police interviewned and he was safe. He is now at Home";
// console.log("checking replace =", simpleEssay.replace("He","2pac"));
// console.log("checking replaceAll = ", simpleEssay.replaceAll("He","2pac"));

// // 11 repeat
// const essayII = "She was held at gun point";
console.clear()

// STRINGMETHODS
// 1 toUpperCase
// 2 toLowerCase
// 3 slice
// 4 concat
// 5 includes

// 1
const sentence = "the girl is very tall"
console.log("i.",sentence.toUpperCase());
const word = "The giRl is very tall"
console.log("ii.",word.toUpperCase());
console.log("\n")

// 2
const phrase = "JAVASCRIPT IS A POWERFUL PROGAMMING LANGUAGE"
console.log("i.",phrase.toLowerCase());
const phrases = "javaSCRIPT IS a POWERful PRoGAMMING LANGUAGE"
console.log("i.",phrases.toLowerCase());
console.log("\n")

// 3
const words = "Victory and Gift are very close friends"
console.log("i.",words.slice(12, 16));
const wordse = "Victory and Gift are very close friends"
console.log("ii.",wordse.slice(32, 39));
console.log("\n")

// 4
const sentences = "Ada is girl "
const pharsed = "Obi is a boy"
console.log(sentences.concat(pharsed));

// 5
const wordess = "Javascript is powerful programming language"
console.log("i.",wordess.includes(1))                     
