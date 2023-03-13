### Używamy tylko komponentów funkcyjnych.

## Zadanie 1

Stwórz komponent `MyButton`.

Ma on zawierać jeden przycisk, który wyświetla na początku "NIE". Po jego kliknięciu napis ma się zmienić na "TAK", po następnym kliknięciu z powrotem na "NIE" itd. **Aby wyświetlić odpowiedni tekst, użyj operatora trójargumentowego bezpośrednio wewnątrz JSX.**

## Zadanie 2

Stwórz komponent `NumberRandomInfo`, który co sekundę losuje liczbę od 0 do 5. Do losowania liczby skorzystaj ze wzoru:

```js
Math.ceil(Math.random() * 5)
```

W metodzie render zrób warunek, który sprawdzi wylosowaną liczbę. Jeżeli jest ona większa od 3, to wyrenderuj tę liczbę oraz napis: "Większa od 3". W przeciwnym wypadku wyrenderuj tę liczbę oraz napis: "Mniejsza od 3".

## Zadanie 3

Stwórz komponent `NumberInfo`, który przez props przyjmuje `number`.

Następnie, bezpośrednio wewnątrz JSX, korzystając z operatora trójargumentowego i operatora logicznego `&& ` wyrenderuj w elemencie `ul` następujące elementy listy:

- Liczba
- Parzysta / nieparzysta
- Liczba pierwsza (nie pojawia się jeżeli to nieprawda)
- Potęga liczby 2 (nie pojawia się jeżeli to nieprawda)

Wyrenderuj i przetestuj swój komponent kilka razy dla atrybutu `number`:

- 1
- 2
- 5
- 7
- 10
- 16



## Zadanie 4

Stwórz komponent `SecretStuff`. Przyjmuje on z props `password`, `correctPassword` oraz `secret`.

Jeżeli atrybuty `password` i `correctPassword` były takie same, to wyświetlany jest `div`, a w nim to, co znajduje się w `secret`. W przeciwnym wypadku zablokuj renderowanie.

**PS. To jedynie przykład. NIGDY nie stosuj w ten sposób blokowania ani sprawdzania poufnych informacji. Jak łatwo się domyślić, takie dane NIE są ukryte.**
