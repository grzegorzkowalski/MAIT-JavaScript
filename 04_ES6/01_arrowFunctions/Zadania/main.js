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