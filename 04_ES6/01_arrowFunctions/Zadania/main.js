//Zadanie 1

const getSecondMaxNumber = (array) => {
    array.sort((a,b) => a - b);
    return array[array.length - 2];
}

const arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(arr1));
//Wynik w consoli: 49 // Największą liczbą w tablicy jest 100, ale my szukaliśmy drugiej największej więc odpowiedzią musi być 49 w tym przypadku

//


//Zadanie 2

//Napisz funkcję strzałkową runInterval(n), która jako parametr (n) przyjmie liczbę całkowitą od 1 - 10.
//
// Zmienna n ma mieć domyślną wartość 8 w razie wywołania funkcji bez żadnej wartości.
//
// Wewnątrz funkcji uruchom interwał (setInterval) który ma wyświetlać napis "Hello" w konsoli co 500 ms.
//
// Napis ten powinien pojawić się określoną ilość razy - ustaloną przez parametr przesłany do funkcji.
//
// Po osiągnięciu, np. 8 powtórzeń interwału, zostaje wyczyszczony.

const runInterval = (n = 8) => {
    console.log(n);
    let counter = 0;
    const intervalId = setInterval(() => {
        if (counter < n) {
            console.log("Hello");
            counter++;
        }
        else {
            clearInterval(intervalId);
        }
    }, 500);
}

// runInterval(3);

runInterval();
