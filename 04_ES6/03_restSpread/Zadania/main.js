// Zadanie 2

const getAverage = (...params) => {
    //const sum = params.reduce((prev, cur) => prev + cur);
    let sum = 0;
    //params.forEach(el => sum += el);
    for (let i = 0; i < params.length ; i++) {
        sum = sum + params[i];
    }
    console.log(params, sum);

    return sum/params.length;
}

getAverage(2, 4, 5, 6, 7, 79);

//Zadanie 3

const myName = "Grzegorz";
const nameChars = [...myName];
const nameChars2 = myName.split("");
console.log(nameChars);
console.log(nameChars2);

//Zadanie 5

const state = {
    invoiceSection: false,
    availableYears: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005],
    formStatus: "failed",
    isUserLogged: false
};
// Twoim zadaniem jest stworzenie kopii obiektu state w zmiennej stateCopy wraz ze zmianą dwóch właściwości:
//
// availableYears - powinno teraz zawierać tylko lata do 1999 włącznie (użyj odpowiedniej metody tablicowej)
// isUserLogged - powinno mieć wartość true
// Na koniec sprawdź w konsoli czy obiekt state pozostał bez zmian.

const stateCopy = {
    ...state,
    availableYears : state.availableYears.filter(el => el <= 1999),
    isUserLogged: !state.isUserLogged
}

console.log(stateCopy);
