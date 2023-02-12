# Prezentacja możliwości React

## Zadanie 1

1. Stwórz nową aplikację typu create-react-app.

1. Stwórz komponent `BookInfo`, który przez props przyjmuje ISBN książki (`isbn`).

1. Za pomocą `fetch()` wykonaj zapytanie na adres otwartego API:
 > `https://www.googleapis.com/books/v1/volumes?q=isbn:{numerISBN}` gdzie zamiast `numerISBN` podasz ISBN przekazany w props.

1. Otrzymasz w odpowiedzi JSON, a z niego obiekt, w którym interesuje Cię tablica pod kluczem `items`, a w niej pierwszy element - obiekt z informacją o książce.

1. Niech komponent wyrenderuje w `div` element `h1` z tytułem (jest w tym obiekcie pod kluczem `volumeInfo.title`.

1. Pamiętaj o zablokowaniu wyświetlania komponentu dopóki nie otrzymasz odpowiedzi z serwera.

Przetestuj swój komponent w ten sposób:

```JS
<BookInfo isbn="0747532699" />
```

1. Dodaj prosty formularz gdzie będziesz mógł samodzielnie wprowadzać numen ISBN i wyszukiwać książki.


