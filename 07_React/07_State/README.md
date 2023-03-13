### Używamy tylko komponentów funkcyjnych.

## Zadanie 1

Stwórz komponent `HelloWorld`, który przechowuje tekst do wyświetlenia jako stan lokalny. Niech napis będzie domyślnie nastawiony na "Hello, World!".

Komponent ma wyrenderować ten napis w elemencie `h1`.

Dodaj do swojego komponentu timer, który po **5 sekundach** zmieni ten tekst na "Hi, Everyone!". Pamiętaj, aby zrobić to w odpowiedniej metodzie cyklu życia, a także, aby zwolnić zasoby.

## Zadanie 2

Stwórz komponent `Box` i wyrenderuj element ```div``` z tłem ustawionym na zielone.

Uruchom interwał, który co 5 sekund będzie zmieniał ten kolor na czerwony i później znów na zielony.

## Zadanie 3

Stwórz komponent `Modal`. Przyjmuje on przez `props` wartość `heading`, np. "Zapisz się do newslettera". Wyświetla on tego propsa w elemencie `h2`.

Komponent ten ma wyrenderować tekst, który znajduje się w props `heading` dopiero po 10 sekundach. W tym celu w odpowiedniej metodzie cyklu życia stwórz `timer`, który wyczeka 10 sekund, a po tym czasie zaktualizuje **stan wewnętrzny komponentu** z `false` na `true`, a tym samym uruchomi ponownie render i wyświetli informację z propsa.

Ma on być wyrenderowany w komponencie `App`:

```js
const App = () => {
  return (
    <div>
      <h1>Test okna modalnego</h1>
      <Modal heading="Zapisz się do newslettera"/>
    </div>
  );
};
```

Jeżeli stan wewnętrzny komponentu `Modal` nastawiony jest na `false`, komponent ten powinien renderować `null`.



## Zadanie 4

Stwórz komponent `StrobeLight`. Przyjmuje on przez props dwie wartości: kolor światła (`color`) oraz częstotliwość mrugania w ms (`frequency`).

Komponent ma wyrenderować pusty element `div` z następującymi stylami:

- Szerokość: `500px`,
- Wysokość: `50px`,
- Kolor tła: `white`.

Dodaj do komponentu `interval`, który sprawi, że co określoną ilość ms (`frequency`) będzie się zmieniać kolor tła naprzemiennie:

Jeżeli wcześniej był kolor biały - na kolor z props,
W przeciwnym wypadku na kolor biały.

Wyrenderuj komponent kilka razy z przykładowymi danymi.

Zajrzyj do narzędzi deweloperskich React. Kliknij na swoje komponenty - zobaczysz ich props, aktualne state oraz podświetlenia aktualizacji.


## Zadanie 5

Stwórz komponent `Clock`, który przechowuje w `state` aktualną datę.

Dodaj do swojego komponentu `interval`, który co 1 sekundę aktualizuje datę w state na aktualną.

Stwórz dwa subkomponenty:

1. `ClockTime` - przyjmuje przez props datę (`date`) i wyświetla samą godzinę (w formacie godziny:minuty:sekundy) w elemencie h1 za pomocą `Date.toLocaleTimeString()`.

2. `ClockDate` - przyjmuje przez props datę (`date`) i wyświetla samą datę w elemencie h1 za pomocą `Date.toLocaleDateString()`.

Główny komponent - `Clock` renderuje odpowiednio dwa subkomponenty przekazując im aktualną datę ze swojego state.
