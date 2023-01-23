# Zadania rozwiązuj w pliku main.js w folderze blog. Wynik sprawdzaj w konsoli oraz uruchamiając plik index.html w przeglądarce.

## Zadanie 1

Wykorzystaj selektor nagłówka, który utworzyliśmy w poprzednim rozdziale. 
   
Za jego pomocą zmień kolor nagłówka na dowolny wybrany, powiększ rozmiar fontu i dodaj podkreślenie.


## Zadanie 2

1. Utwórz w css klasę `hide`, która ukryje element z tą nadaną klasą. 
1. Wykorzystaj obiekt `classList`, żeby dodać klasę `hide` do formularza po naciśnięciu przycisku wyślij.
1. Dodaj komunikat `Wiadomość została wysłana`.


## Zadanie 3

1. Po najechaniu na nagłówek `Welcome to Laos!` zmień kolor nagłówka i podmień zdjęcie po lewej stronie na dowolne inne.


## Zadanie 4

Uruchom stronę `index.html`.  Na stronie znajdują się dwa elementy o klasach ```parent``` i ```children```
Stwórz event, który po najechaniu na element ```parent``` pokaże element ```children```. Zauważ, że element ```children``` ma ustawiony display: none w css.
Stwórz drugi event, który po zjechaniu z elementów schowa z powrotem element ```children```.
Pamiętaj o tym, aby nie chować wszystkich elementów naraz.
 

## Zadanie 5

Uruchom stronę przygotowaną dla zadania. Na stronie znajduje się przycisk. Podepnij do niego event, który po kliknięciu spowoduje, że w konsoli wyświetli się napis "Hura! Działa!".


## Zadanie 6

Uruchom stronę przygotowaną dla zadania. Na stronie znajdują się trzy przyciski i jeden licznik. Napisz jeden wspólny event dla wszystkich przycisków, który spowoduje, że po kliknięciu w przycisk licznik zwiększy wartość o jeden.


## Zadanie 7

Uruchom stronę przygotowaną dla zadania. Na stronie znajdują się trzy przyciski i trzy liczniki (elementy ```span``` o klasie ```counter```). Do każdego przycisku dopisz event, który spowoduje, że po kliknięciu w przycisk przypisany do niego licznik zwiększy swoją wartość o jeden.



## Zadanie 8

Uruchom stronę przygotowaną dla zadania. Na stronie znajdują się trzy elementy ```div```. Napisz **jeden** wspólny event dla nich wszystkich, który będzie zmieniał kolor tła tylko w klikniętym **divie**. Użyj do tego słowa kluczowego ```this```.

**Hint**:
Żeby uzyskać losowy kolor użyj poniższego kodu:
```JavaScript
const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

