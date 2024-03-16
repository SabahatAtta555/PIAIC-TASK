var myName = "SABAHAT ATTA";
console.log("Lowercase: " + myName.toLowerCase());
console.log("uppercase: " + myName.toUpperCase());
var words = myName.split(" ");
var titlecaseName = "";
for (var i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log("Titlecase: " + titlecaseName);
