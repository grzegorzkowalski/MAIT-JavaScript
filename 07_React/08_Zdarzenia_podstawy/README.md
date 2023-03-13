### Używamy tylko komponentów funkcyjnych.

## Zadanie 1

Stwórz komponent funkcyjny o nazwie `Buttons` z 3 przyciskami z napisem "Klik!".

- Po kliknięciu pierwszego przycisku wyświetl w konsoli "Pierwszy przycisk kliknięty".

- Po kliknięciu drugiego przycisku wywołaj dwukrotnie funkcję `prompt()`, służącą do pobrania od użytkownika liczby A i B. W konsoli wyświetlcie wynik potęgowania tych dwóch liczb.

- Po kliknięciu trzeciego przycisku wyświetl w konsoli szerokość i wysokość ekranu (z obiektu `window`).



## Zadanie 2

Stwórz komponent `ShowUserFunc`. Ma on przyjmować w `props` imię (`name`) i nazwisko (`surname`). Komponent ma renderować przycisk "Dane użytkownika". Po jego kliknięciu **w konsoli** wyświetl zawartość propsów `name` i `surname`.



## Zadanie 3

Stwórz komponent `HoverEvent` renderujący przycisk. Po **najechaniu** na przycisk wypisz w konsoli: "Najechano na przycisk!".



## Zadanie 4

Stwórz komponent `EventsTest` z elementem `div` o wymiarach 100 na 100 pikseli i czerwonym tle.

Zareaguj na zdarzenia: kliknięcia, najechania, opuszczenia kursorem tego elementu - wypisując odpowiednią informację w konsoli.



## Zadanie 5

Stwórz komponent `Counter`. Ma on posiadać własny stan z ustawioną wartością początkową na `10`.
 
Ma on wyrenderować:

- `h2` z napisem: "Liczba kliknięć {tutaj wstaw wartość licznika}"
- `button` "+" który ma zwiększać licznik o 1
- `button` "-" który ma zmniejszać licznik o 1
- `button` "Reset" - który ma przywracać wartość licznika do początkowej (10)

Pamiętaj aby zbudować także główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.



## Zadanie 6

Stwórz komponent `CurrentDate` który ma za zadanie wyświetlać aktualną datę wraz z godziną w formacie: "Godziny:Minuty:Sekundy, Dzień/Miesiąc/Rok" ([CheatSheet dla obiektu Date](https://devhints.io/js-date)).

Ma on również renderować przycisk "Zaktualizuj datę". Po jego kliknięciu, ma zostać zaktualizowany `state` komponentu i wyrenderowana aktualna data i godzina.


## Zadanie 7

Stwórz komponent `CountThings` który będzie miał **dwa stany początkowe**:

- stan konta w banku (na początku 10000)
- aktualny wiek użytkownika

Komponent ma renderować `div` z dwoma `p`:

- Pierwszy ma mieć napis: "💰 so much money: ${stan konta}"
- Drugi ma wyświetlać: "Age: {wiek użytkownika}"

Dodatkowo mają pojawić się dwa przyciski:

- "Get rich!" który po kliknięciu ma dodawać do stanu konta 1000
- "Get older :(" który po kliknięciu ma dodawać 1 do wieku użytkownika



## Zadanie 8

Stwórz komponent `TextTyper` (w odpowiednim pliku). Przyjmuje on przez `props` wartość `text`.

Komponent ma wyrenderować pierwszą literę tego napisu w elemencie `h1`. Pamiętaj, aby do przechowywania znaków, które mają być wyświetlone, skorzystać ze `state`.

Dodaj do komponentu dwa przyciski: `+` i `-`. Po kliknięciu w `+` na stronie powinna pojawić się kolejna litera z tekstu przesłanego przez `props`.

Po kliknięciu `-` ma nastąpić odwrotna sytuacja, czyli ostatni znak ma zniknąć.

Efekt może wyglądać tak dla `text` ustawionego na "Witaj!":

- brak kliknięć: "W"
- kliknięcie +: "Wi"
- kliknięcie +: "Wit"
- kliknięcie -: "Wi"
- kliknięcie +: "Wit"
- kliknięcie +: "Wita"
- kliknięcie -: "Wit"

Oczywiście metody tego komponentu muszą być odpowiednio zabezpieczone, żeby nie generować żadnych błędów.

Zajrzyj do narzędzi deweloperskich React. Klikając na swój komponent, zobaczysz jego `props`, aktualne `state` oraz podświetlenia aktualizacji.



## Zadanie 9

Stwórz komponent `ToDoList` który ma przechowywać w swoim stanie na początku pustą tablicę. Renderować ma przycisk "Dodaj zadanie" a także listę `ul` z zadaniami z tej tablicy.

Po kliknięciu przycisku należy dodać do tablicy w stanie komponentu napis: "Zadanie n". Pod `n` wstaw kolejny numer zadania na podstawie ilości elementów w tablicy.



## Zadanie 10

Stwórz komponent `RandomNumbers` który na początek w swoim stanie będzie przechowywał pustą tablicę pod kluczem `numbers`. 

Komponent ten ma renderować przycisk "Wylosuj liczbę". Po jego kliknięciu, należy:
 
- wylosować wartość z przedziału 100 - 999, 
- wstawić ją do tablicy w stanie aplikacji jako kolejny jej element,
- wyświetlić wszystkie elementy tablicy w formie listy `ul` na stronie (należy użyć metody tablicowej `map`)



## Zadanie 11

Stwórz komponent `MagicBox` który ma w swoim stanie przechowywać klucz `color` z wartością `#000`.
 
Powinien renderować `div` o wymiarach `200x200px` a także z kolorem tła takim jak klucz `colors` w `state`.

Po **najechaniu myszą** na tego `diva` należy wygenerować nowy kolor i zapisać go do stanu aplikacji. Box powinien po każdym najechaniu na niego myszą zmienić swój kolor tła.

Ta linijka kodu generuje losowy kolor, możesz z niej skorzystać:
```js
const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
```


## Zadanie 12

Stwórz komponent `ColorfulBoxes`. Stan początkowy komponentu powinien być pustą tablicą.

Komponent ma renderować:

- Przycisk "Dodaj Boxa!"
- Boksy (`divy` o rozmiarach `200x200`) wygenerowane na podstawie tablicy w stanie komponentu

Przycisk "Dodaj Boxa!" ma dodawać do tablicy w stanie komponentu losowo wygenerowany kolor. Każdy box wyrenderowany na podstawie tej tablicy powinien mieć `backgroundColor` nastawiony na odpowiadający mu wpis z tablicy.




## Zadanie 13

Stwórz komponent `UpperLower` który ma posiadać w swoim stanie dowolny napis. Ma go on również wyświetlać w `h2` wraz z dwoma przyciskami:

- "Uppercase" ma przekształcić dany tekst w stanie na wielkie litery
- "Lowercase" ma przekształcić dany tekst w stanie na małe litery

Pamiętaj, aby zbudować także główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.



## Zadanie 14

### Część 1
Stwórz komponent `Numbers` który na początek w swoim stanie będzie przechowywał tablicę składającą się z różnych liczb, np.:

```plain
[54,76,24,63,4,54,82,36,13,80,10,69,4,23,40]
```

Komponent ten ma renderować wszystkie te wartości w formacie listy `ul` a także przycisk "Pokaż tylko parzyste". Po jego kliknięciu, należy przefiltrować tablicę liczb i zapisać do stanu tablicę składającą się tylko z wartości parzystych.


### Część 2

Zmodyfikuj to zadanie dodając dwa dodatkowe przyciski: 

- "Pokaż wszystkie" wyświetla wszystkie wartości (parzyste i nieparzyste)
- "Pokaż nieparzyste" wyświetla tylko wartości nieparzyste

Aby mieć dostęp do pełnej tablicy nawet po jej przefiltrowaniu, można zapisać ją do zmiennej pomocniczej **przed** inicjalizacją stanu, a następnie skorzystać z niej podczas zaczepiania stanu metodą `useState`.



## Zadanie 15

Komponent `CustomTitle` ma zawierać informacje o ilości kliknięć (początkowo 1) w element `p` na stronie. Element ten ma wyświetlać napis: "Kliknięto mnie już: {n} razy". 

Ma on również zwiększać swój `font-size` razem z liczbą kliknięć według wzoru: `n * 1.2rem`.

Dodatkowo, ilość kliknięć ma się wyświetlać w tytule strony (obiekt `document`). Wykorzystaj do tego `useEffect`.



## Zadanie 16

Stwórz komponent `CrazyDiv`. Ma on mieć czerwone tło, wysokość i szerokość `100px` oraz `position` ustawione na `absolute`.

Po każdym najechaniu na `div` ma się zmieniać jego styl `left` i `top` na dwie losowe wartości z przedziału, który został zdeklarowany jako parametry funkcji. Np.:

```js
() => handleHover(0, 1000); // przedział 0 - 1000
() => handleHover(300, 600) // przedział 300 - 600
```
