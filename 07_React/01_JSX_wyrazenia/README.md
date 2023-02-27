## Zadanie 1

Po załadowaniu się strony wyświetl użytkownikowi dwa razy `prompt()`, zachęcając do podania liczby A i B. Odpowiedzi przechowuj w zmiennych. Nie zapomnij o użyciu `parseInt(str)` aby zmienić wartość typu string w zmienną typu number.

Następnie w elemencie `<div className="App"></div>` usuń zawartość domyślną i wyrenderuj bezpośrednio w tagu JSX `p` sumę liczb A i B.

## Zadanie 2

Za pomocą `prompt()` odczytaj rok urodzenia użytkownika. 
Odpowiedź zapisz w zmiennej.

Następnie za pomocą metody `new Date().getFullYear()` pobierz aktualny rok.

Za pomocą JSX wyświetl tag `h1`, w którym wypiszesz wiek użytkownika. Odejmowanie wykonaj bezpośrednio w wyrażeniu w tagu JSX.

## Zadanie 3

W folderze `src` stwórz folder data. W folderze stwórz plik js o nazwie `artist.js` opisujący swojego ulubionego artystę.
Możesz skorzystać z nastepującego wzoru:

```
export default {
  nickname: "Eminem",
  firstName: "Marshall",
  lastName: "Mathers",
  age: 49
};
```
 Zaimportuj plik do `App.js`, za pomocą polecenia:

```js
import artist from './data/artist';
```

Następnie w elemencie o klasie `App` wyrenderuj element `ul`, w którym w osobnych elementach `li` wyswietlisz zawartość zaimportowanego obiektu. 

## Zadanie 4

Stwórz prosty kalkulator, który liczy wynik dodawania, odejmowania, mnożenia lub dzielenia.

Możesz skorzystać z kodu zadania pierwszego. Zmodyfikuj je w taki sposób aby wyświetlać jeszcze jeden `prompt()`, który ma pobierać jeden ze znaków: `+`, `-`, `*` lub `/` - odpowiada on operacjom matematycznym, jakie zostaną wykonane na liczbach A i B.

Zadanie wykonaj w taki sposób aby w zależności od operacji był renderowany inny element: dla dodawania element `h1`, dla odejmowania element `h2`, dla mnożenia element `h3`, a dla dzielenia element `h4`. 
Stwórzy funkcję, która będzie zwracała odpowiedni jsx z obliczeniami na podstawie przekazanych parametrów. Wyrenderuj w `App.js` wynik działania funkcji.

## Zadanie 5

W folderze `data` dodaj plik `fruits.js`.

```
export default ["orange", "cherry", "apple", "grape", "blueberry"];
```
Następnie w elemencie o klasie `App` wyrenderuj element `p` zawierajacy następujące informacje `Owoce: <wstaw ilość elementów w tablicy>` i element `p` zawierajacy wypisane owoce jako string w formacie `orange-cherry-grape`;
