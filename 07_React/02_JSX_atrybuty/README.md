## Zadanie 1

Przechowaj adres zdjęcia w zmiennej, np.:

```js
const imageUrl = "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_960_720.jpg";
```

Następnie za pomocą React wyrenderuj w elemencie o id `app` element `img`, którego atrybut `src` ustawisz w JSX na wartość zmiennej `imageUrl`.

Pamiętaj o zamknięciu tagu `img`.


## Zadanie 2



Wykorzystaj funkcję `randomNumber()`, która generuje pseudolosowe liczby z zakresu 1-10. Za jej pomocą wygeneruj liczbę A i liczbę B.

Następnie za pomocą funkcji `prompt()` zapytaj użytkownika, jaki jest wynik dodawania tych dwóch liczb. **Wyświetl w komunikacie prompt-a obie liczby żeby użytkownik miał szansę je zobaczyć.**

Następnie w elemencie o klasie `App` wyrenderuj element `div`. Jeżeli odpowiedź użytkownika była poprawna, w nowo utworzonym elemencie `div` wyświetl informację `Odpowiedź poprawna` i ustaw styl tła na **zielony**. Jeżeli odpowiedź była niepoprawna, to element `div` ma zawierać informację `Odpowiedź błędna` oraz ma mieć styl tła **czerwony**.

```
const randomNumber = () => {
  return Math.round(Math.random() * 9 + 1);
}
```



## Zadanie 3

Stwórz trzy zmienne (`redDiv`, `greenDiv`, `blueDiv`) zawierające strukturę JSX pustego elementu `div`.

Ustaw wszystkim trzem div-om wysokość na ```100px```, a każdemu z nich ustaw kolor tła odpowiadający jego nazwie. 

Style dodaj liniowo lub przekazując obiekt ze stylami.

Następnie w elemencie o klasie `App` wyrenderuj stworzone elementy.



## Zadanie 4

Za pomocą `prompt()` zapytaj użytkownika o kolor ramki i przechowaj odpowiedź w zmiennej.

Sprawdź czy odpowiedź to `red`, `green` lub `blue` (możesz wykorzystać metodę `indexOf()` lub inną poznaną metodę tablicową). 

Jeżeli odpowiedź nie zgadza się z naszym warunkiem, to wyrenderuj element `div` z napisem "Nieprawidłowy kolor".

Jeżeli podany kolor był poprawny, to za pomocą React wyrenderuj element `div`, ze stylami ustawionymi na:

- Szerokość: `100px`
- Wysokość: `100px`
- Grubość ramki: `5px`
- Styl ramki: `solid`
- Kolor ramki: **ten podany przez użytkownika**
