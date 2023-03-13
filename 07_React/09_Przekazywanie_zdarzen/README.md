### Używamy tylko komponentów funkcyjnych.

## Zadanie 1

Stwórz komponent `ButtonCounter` oraz komponent `ButtonToClick`.

Komponent `ButtonCounter` wyświetla `div`, a w nim `h1` oraz przycisk stworzony za pomocą komponentu `ButtonToClick`. 

W `h1` ma być na początku wyświetlane 0 - docelowo ma tam się wyświetlać ile razy (łącznie) zostały kliknięte przyciski.

Komponent `ButtonToClick` zawiera  przycisk `button`, po kliknięciu którego jest przesyłana odpowiednia informacja do callbacku, który pobiera z props atrybut pod nazwą `onClick`. **Nie zapomnij sprawdzić czy ten atrybut został odpowiednio przekazany i jest funkcją.**

## Zadanie 2

Stwórz komponent `Shop` oraz komponent `ShopItem`.

`ShopItem` zawiera `div`, a w nim `h1`, którego zawartość jest pobierana z props `title`. W `div` znajduje się też przycisk z napisem "Kup". Po jego kliknięciu przesyła się odpowiednią informację do callbacku, który pobiera ją z props pod nazwą `onBuy`. Nie zapomnij sprawdzić czy ten atrybut został odpowiednio przekazany i czy jest funkcją. Wywołanie callbacku ma się odbyć za argumentem pobieranym z tytułu przekazanego w props (`title`).

Shop ma mieć następującą strukturę:

```html
<div>
  <ShopItem title="MacBook Pro" />
  <ShopItem title="Dell X5500" />
  <ShopItem title="Asus NT6000" />
  <ul>
    {list}
  </ul>           
</div>        
```
Zamiast `list` ma się pojawić lista elementów `li` z wymienionymi elementami, na których użytkownik kliknął przycisk "Kup".



## Zadanie 3

Stwórz aplikację TODO składająca się z:

1. głównego komponentu TodoApp, który będzie trzymał stan aplikacji,
2. komponentu zawierającego przycisk dodaj nowy task,
3. komponentu TodoList wyświetlającego liste tasków TodoItem.
4. Każdy TodoItem ma mieć przycisk, do którego będzie podpięte przekazane przez propsy zdarzenie do usunięcia danego Taska z listy.

