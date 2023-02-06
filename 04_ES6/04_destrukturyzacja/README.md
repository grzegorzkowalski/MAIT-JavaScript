## Zadanie 1




Podstaw pod zmienne pierwszą i ostatnią wartość następującej tablicy: ```[ "snow", "rain", "sun" ]```. Wypisz zmienne w konsoli.



## Zadanie 2




Stwórz obiekt ```slider```, taki jak poniżej:

```js
const slider = {
  type: "infinite",
  numberOfItems: 10,
  center: true,
  autoStart: true
}
```

Podstaw do zmiennych ```type``` oraz ```autoStart``` odpowiednie wartości z obiektu ```slider```.



## Zadanie 3




Stwórz tablicę z 3 imionami. Następnie każde imię przypisz do kolejnej zmiennej np. `name1`, `name2`, `name3`. Wykorzystaj destrukturyzację.



## Zadanie 4




Stwórz funkcję ```generateRandomNumbers()```, której zadaniem jest wylosowanie i zapisanie do tablicy 6 liczb (0-5) oraz zwrócenie tej tablicy.

Zapisz do zmiennych pierwszą i trzecią liczbę ze zwróconej tablicy. Wyświetl te zmienne w konsoli.



## Zadanie 5




Stwórz funkcję ```showAnimal()```, która przyjmie obiekt:

```js
const cat = {
  name: "Mruczek",
  age: 10,
  getVoice: () => "miau miau"
};
```

I wyświetli w konsoli: `Kot ${name} ma ${catAge} lat i robi ${getVoice()}`.

#### Warunki
- Zmienna `catAge` powinna zawierać wartość z pola `age`
- Przypisanie wartości kluczy obiektu do zmiennych powinno nastąpić już w procesie deklaracji funkcji (nie w jej ciele)
