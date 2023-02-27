//Zadanie 1

const num1 = 17;
const num2 = 3;
const template = `Suma dwóch liczb ${num1} i ${num2} to: ${num1+num2}`;
console.log(template);
const template2 = "Suma dwóch liczb " + num1 + " i " + num2 + " to: " + (num1+num2);
console.log(template2);
//Suma dwóch liczb 2 i 4 to: 6

//Zadanie 2

const person = {
    name: "Vlad",
    lastName: "Drăculea",
    yearOfBirth: 1431,
    profession: "Lord of Wallachia"
};

function whoAreYou(data) {
const printText =
`My name is ${data.name} ${data.lastName}.
I am ${new Date().getFullYear() - data.yearOfBirth} years old.
My profession is ${data.profession}.`;
    return printText;
}

console.log(whoAreYou(person));

//My name is Vlad Drăculea.
// I am 586 years old.
// My profession is Lord of Wallachia.
