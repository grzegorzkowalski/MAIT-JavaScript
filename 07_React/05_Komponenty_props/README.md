### Używamy tylko komponentów funkcyjnych.

## Zadanie 1

Stwórz komponent `Hello`. Do `props` przekazuje mu się imię (`name`) oraz nazwisko (`surname`).

Powinien on wyświetlać w elemencie `h1` napis "Hello, name surname" z odpowiednimi danymi. Wyrenderuj go na stronie podając w atrybutach do `props` swoje dane.



## Zadanie 2

Stwórz komponent o nazwie `AddNumbers`. Do props przekaż mu liczbę A (`numberA`) oraz liczbę B (`numberB`).

Powinien on wyświetlać w elemencie `h1` **sumę tych dwóch liczb**. Wyrenderuj go na stronie podając w atrybutach do props przykładowe liczby.




## Zadanie 3

Stwórz komponent o nazwie `Sum`. Do `props` przekaż mu tablicę liczb (`numbers`).

Powinien on wyświetlać w elemencie `h1` sumę wszystkich podanych liczb. Możesz do tego wykorzystać znany Ci `reduce()`. Wyrenderuj go na stronie podając w atrybucie do `props` przykładową tablicę liczb.




## Zadanie 4

Zmodyfikuj komponent `LikeBox` z poprzedniego tematu. Niech przyjmuje w `props` początkową liczbę polubień (`likes`). Wyrenderuj go na stronie podając w atrybucie do `props` przykładową liczbę polubień.



## Zadanie 5

Zmodyfikuj komponent `Menu` z poprzedniego tematu. Niech przyjmuje on w props tablicę obiektów z pozycjami menu (`menu`).

Obiekty mają być w takiej formie:
```js
{
  url: "adres_odnośnika",
  text: "tekst linku"
}
```

Używając `map()` stwórz z tych obiektów elementy `li`, które będą w głównym elemencie `ul`.

Wyrenderuj go na stronie podając w atrybucie do props następujący atrybut menu:
```js
[
  {
    url: "/",
    text: "Strona główna"
  },
  {
    url: "/blog",
    text: "Blog"
  },
  {
    url: "/cennik",
    text: "Cennik"
  },
  {
    url: "/kontakt",
    text: "Kontakt"
  }
]
```



## Zadanie 6 

Stwórz komponent `CurrencyConverter`, który przyjmuje przez `props`:

- sygnaturę waluty bazowej `from`
- sygnaturę waluty kwotowanej `to`
- kwotę `value`
- przelicznik `rate`

Komponent ma zwracać taką przykładową strukturę HTML:

```html
<div>
  <strong>200.00</strong> EUR => <strong>224.55</strong> USD
</div>
```

dla wywołania:

```js
<CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275} />
```

Wyrenderuj **trzy komponenty** `CurrencyConverter`, przekazując różne wartości w `props`.
