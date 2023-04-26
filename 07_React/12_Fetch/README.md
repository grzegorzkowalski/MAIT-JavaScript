### Używamy tylko komponentów funkcyjnych.

## Zadanie 1

Stwórz komponent `BookInfo`, który przez props przyjmuje ISBN książki (`isbn`).

Za pomocą `fetch()` wykonaj zapytanie na adres otwartego API:
 > `https://www.googleapis.com/books/v1/volumes?q=isbn:{numerISBN}`

gdzie zamiast `numerISBN` podasz ISBN przekazany w props.

Otrzymasz w odpowiedzi JSON, a z niego obiekt, w którym interesuje Cię tablica pod kluczem `items`, a w niej pierwszy element - obiekt z informacją o książce.

Niech komponent wyrenderuje w `div` element `h1` z tytułem (jest w tym obiekcie pod kluczem `volumeInfo.title`.

Pamiętaj o zablokowaniu wyświetlania komponentu dopóki nie otrzymasz odpowiedzi z serwera.

Przetestuj swój komponent w ten sposób:

```JS
<BookInfo isbn="0747532699" />
```

## Zadanie 2

Zadanie polega na wczytaniu danych z adresu: `https://pokeapi.co/api/v2/pokemon`

* użyj odpowiedniej metody HTTP, jeśli jest potrzebna,
* użyj odpowiednich metod informujących użytkownika o statusie żądania (metody ```then()```, ```catch()```),
* sprawdź w konsoli, jak wyglądają wczytywane dane, czy jest to tablica, string, JSON?
* jeśli dane zostaną poprawnie wczytane, to wywołaj odpowiednią funkcję zmieniającą stan komponentu do której jako argument przekaż wczytane dane,
* komponent ma renderować w pętli elementy **li** do którego wstawisz nazwę pokemona 
* dodaj warunkowe renderowanie, wyświetl informację ładowanie danych dopóki, dopóki nie pobierzesz danych z serwera. Po dodaniu danych do stanu wyświetl je.


## Zadanie 3

1. Wyślij zapytanie po swój adres IP i poczekaj na odpowiedz.
2. Użyj serwisu `https://www.ipify.org/`.
3. Po otrzymaniu odpowiedzi odpytaj serwis `https://ip-api.com/` o szczegóły dla Twojego adresu IP.
4. Gdy dane z drugiego serwisu zostaną zwrócone wyrenderuj je.
5. Do czasu otrzymania drugiej odpowiedzi nie renderuj komponentu.
