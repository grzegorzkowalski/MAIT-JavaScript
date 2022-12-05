# Zadania rozwiązuj w odpowiednim folderze w pliku main.js. Wynik sprawdzaj w konsoli.

## Zadanie 1

Otwórz Chrome Developer Tools. 
Przetestuj działanie komend:
```js
console.log("Ala ma kota.");
console.warn("JS wciąga :)");
console.table(["Jan", "Mateusz", "Weronika"]);
console.error("Oj coś poszło nie tak :(");
````

## Zadanie 2

Spróbuj wypisać w konsoli wszystkie zmienne zdefiniowane w pliku `main.js`.

- Napisz we wnioskach, których zmiennych nie dało się wypisać w konsoli i dlaczego.

## Zadanie 3

Stwórzy klasyczną funkcję przyjmującą jeden parametr string sprawdzi czy podany string jest palidromem. 
Jeśli tak niech funkcja zwróci true. W odwrotnym przypadku false.

Rozważ nastepujące przypadki:

- „A to kawa kota”

- "Ala ma kota"

Podpowiedź zignoruj spacje i wielkośc liter.


## Zadanie 4

W pliku `main.js` znajduje się tablica `numbers` i funkcja `compareNumbers`.

- Za pomocą metody sort i przekazanej jako parametr powyższej funkcji posortuj i wyświetl w konsoli tablicę `numbers`.

## Zadanie 5

Stwórz dwie tablice.

- Jedna `vegetables` niech zawiera twoje ulubione warzywa, druga `fruits` twoje ulubione owoce.
- Stwórz zmienną `salad`.
- Do zmiennej `salad` przypisz nową tablicę, która będzie połączeniem dwóch powyższych tablic. Do łaczenia użyj metody concat.

## Zadanie 6

W pliku `main.js` masz utworzoną tablicę pizzas. Wypisz w konsoli elementy tablicy za pomocą funkcji for i metody forEach.

## Zadanie 7

W pliku `main.js` jest utworzona tablica z największymi miastami świata. Napisz funkcję, która odnajdzie w przekazanej tablicy, która nazwa stolicy jest najdłuższa i zwróci jej nazwę i długość(ilość znaków);

## Zadanie 8

Napisz funkcję, która losuję liczbę w przedziale od 1 do 10 zwraca czy jest ona parzysta czy nie.

## Zadanie 9

Za pomocą obiektu Date i odpowiedniej metody (https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear) oblicz ile lat mineło od twojego urodzenia.

Za pomocą pętli wyświetl w konsoli (zmienna `cake`) tort urodziny za każdy swój rok życia. 

## Zadanie 10

Wypisz na konsoli wszystkie właściwości z obiektu `employee`. Zmodyfikuj zawód i wyświetl go, żeby sprawdzić czy zadanie zostało poprawnie wykonane.
##*Zadania zaawansowane

## Zadanie 11

Napisz funkcję ```distFromAverage```, która ma przyjmować tylko jeden argument - tablicę. Funkcja ta ma zwracać też tablicę. Zwracana tablica powinna mieć w sobie wartości bezwzględne z różnicy pomiędzy liczbą z danej komórki a średnią wartością tablicy.  
Np.

```JavaScript
distFromAverage([1,2,3,4,5,6,7]) => [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)
distFromAverage([1,1,1,1]) => [0,0,0,0] (średnia z tablicy wejściowej to 1)
distFromAverage([2,8,3,7]) => [3,3,2,2] (średnia z tablicy wejściowej to 5)
```

## Zadanie 12

Napisz funkcję ```multiply(array)```. Funkcja ma przyjmować tylko jeden argument - tablicę. Następnie funkcja ```multiply``` ma pomnożyć wszystkie liczby znajdujące się w tablicy przy pomocy odpowiedniej metody tablicowej i zwrócić wynik.

```JavaScript
multiply([1,2,3,4,5,6,7]) => 5040
multiply([1,1,1,1]) => 1
multiply([2,8,3,7]) => 336
```

## Zadanie 13

Napisz funkcję ```getEvenAverage```, która ma przyjmować tylko jeden argument - tablicę. Funkcja ta ma zwracać średnią wartość **parzystych** liczb z tej tablicy. Dla uproszczenia można założyć, że tablica ma w sobie tylko liczby. Jeśli w tablicy nie ma parzystych liczb niech zwraca null.

```JavaScript
getEvenAverage([1,2,3,4,5,6,7]) => 4
getEvenAverage([1,1,1,1]) => null
getEvenAverage([2,8,3,7,4]) => 4.666


