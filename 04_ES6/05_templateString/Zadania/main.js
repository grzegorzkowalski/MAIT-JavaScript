//Zadanie 1

const num1 = 17;
const num2 = 3;
const template = `Suma dwóch liczb ${num1} i ${num2} to: ${num1+num2}`;
//console.log(template);
const template2 = "Suma dwóch liczb " + num1 + " i " + num2 + " to: " + (num1+num2);
//console.log(template2);
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

//console.log(whoAreYou(person));

//My name is Vlad Drăculea.
// I am 586 years old.
// My profession is Lord of Wallachia.

//Zadanie 3

const product = {
    name: "Laptop Pro",
    brand: "TechCorp",
    price: 1499.99,
    discount: 0.15,
    inStock: true
};

const product2 = {
    name: "Laptop Pro",
    brand: "TechCorp",
    price: 1499.99,
    discount: 0.15,
    inStock: false
};

const describeProduct = ({name, brand, price, discount, inStock})  => {
    return (
        `The product ${name} by ${brand} is priced at $${price}.
After a ${discount*100}% discount, the price is $${price * (1-discount)}.
This product is currently ${inStock ? "in stock" : "unavailable"}.`
    )
}

//console.log(describeProduct(product));
console.log(describeProduct(product2));
