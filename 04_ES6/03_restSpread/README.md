## Zadanie 1

Stwórz dwie tablice ```namesA``` i ```namesB```. Pierwsza niech zawiera same stringi.
Druga niech zawiera dwa dowolne stringi, a od trzeciego miejsca te same elementy co tablica ```namesA```. Ostatnie dwa elementy tablicy ```namesB``` to niech będą "Jan" i  "Karol".

Przykład:

```plain
["Zosia", "Marcin", "Kamil"] // Tablica 1
["Ala", "Puszek", "Zosia", "Marcin", "Kamil", "Jan", "Karol" ] // Tablica 2
```

## Zadanie 2

Stwórz funkcję o nazwie ```getAverage```, która może przyjąć dowolną liczbę parametrów (w postaci liczb) i która zwraca średnią arytmetyczną tych liczb.

Przykład wywołania:

```js
getAverage(2, 4, 5, 6, 7, 79);
```



## Zadanie 3

Stwórz zmienną przechowującą Twoje imię. Za pomocą **operatora rozproszenia** zapisz każdą literkę do tablicy.
Wypisz tablicę w konsoli.



## Zadanie 4



Stwórz dwie tablicę ```fruits``` i ```vegetables```. Następnie stwórz trzecią tablicę ```mix```, która będzie połączeniem obu poprzednich tablic. Użyj **operator rozproszenia**.



## Zadanie 5



```
const state = {
  invoiceSection: false,
  availableYears: [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005],
  formStatus: "failed",
  isUserLogged: false
};
```
Twoim zadaniem jest stworzenie **kopii** obiektu `state` w zmiennej `stateCopy` wraz ze zmianą dwóch właściwości: 

- `availableYears` - powinno teraz zawierać tylko lata do `1999` włącznie (użyj odpowiedniej metody tablicowej)
- `isUserLogged` - powinno mieć wartość `true`

Na koniec sprawdź w konsoli czy obiekt `state` pozostał bez zmian.