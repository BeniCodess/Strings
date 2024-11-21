// 1 Extract, Transform and reconstruct
const sentence = "The quick brown fox jumps over the lazy dog";
const sliceBrown = sentence.slice(10, 15).toUpperCase();
const modifiedWord = sentence.replace("dog") 

console.log("1.", sliceBrown);

// 2 Domain and Username
const email="Student.Name@SchoolDomain.com";
const username="Student.Name@";
console.log(email.slice(19, 25).toLowerCase());
console.log(username.slice(0, 12).toUpperCase());
console.log(username.toUpperCase().concat(email.substring(19, 25)));

// 3 clean, count, and extract
const messyString ="Too many spaces here";
console.log(messyString.trim());
console.log(messyString.length);
console.log(messyString.slice(5));

// 4 complex word replacement
const phrase ="i'll like to code in Javascript. Javascript is fun!";
console.log(phrase.replace("Javascript","Js"));
console.log(phrase.replaceAll("Javasript","Js"));
console.log(phrase.toUpperCase());
console.log(phrase.slice(10, 31));

// 5 Character manipulation
const text ="Programming is highly rewarding";
console.log(text.slice(10));
console.log(text.charCodeAt(10));
console.log(text.slice(8, 28));

// 6 complex string joining
const firstName = "Jane";
const middleName = "Marie";
const lastName = "Smith";
console.log(firstName +" "+ middleName +" "+ lastName.toUpperCase());
console.log(middleName.indexOf("M"));
console.log(middleName.replace("Marie","Ann"));

// 7 sentence state and end analysis
const statement = "Javascript is a versatile and popular programming language";
console.log(statement.startsWith("Javascript"));
console.log(statement.endsWith("language"));
console.log(statement.replace("versatile","powerful"));
console.log(statement.toLowerCase());

// 8 substring manipulation
const description ="Backened development involves working with databases, servers, and APIS";
console.log(description.slice(43,52));
console.log(description.slice(53, 60));
console.log(description.slice(62,70));
console.log(description.toLowerCase())

// 9 word split and count
const announcement ="Join the new online coding bootcamp now";
console.log(announcement.length)


// 10 substring replacement and case change
const feedback ="This course is simply amazing. This course is simply comprehensive."
console.log(feedback.replaceAll("course","program"));
console.log(feedback.toUpperCase());
console.log(feedback.slice(5, 55))



