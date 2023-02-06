## Zadanie 1 - rozwiązywane z wykładowcą



Stwórz klasę abstrakcyjną `Vehicle`. Stwórz trzy obiekty:

1. `boat`
1. `car` 
1. `plane` 

na podstawie odpowiednich klas dziedziczących po `Vehicle`. W odpowiednich klasach stwórz metody, które będą wypisywały w konsoli informacje wyróżniające te pojazdy. Zrób to w taki sposób, aby obiekt `boat` nie mógł jeździć ani latać, itp.



## Zadanie 2



### Część 1

Stwórz klasę ```Duck```. Będzie to klasa abstrakcyjna, z której będą dziedziczyć inne kaczki. Stwórz wewnątrz tej klasy konstruktor i metody:

* konstruktor - którego zadaniem będzie ustawienie typu kaczki na "ordinary duck" np. `this.type = "ordinary duck"`
* sound() - wypisuje "Quack quack"
* swim() - wypisuje "I'm swimming...""
* print() - wypisuje "Looks like ordinary duck". Skorzystaj z ustawienia `type` do wypisania typu kaczki.

Stwórz obiekt ```donaldDuck```. Wywołaj dla niego wszystkie metody.


### Część 2

Na bazie  klasy ```Duck``` stwórz kolejną o nazwie ```WildDuck```. Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody ```print()``` typ kaczki zmienił się na "wild". Stwórz obiekt ```daffyDuck```. Wywołaj dla niego wszystkie metody.


### Część 3

Na bazie klasy ```Duck``` stwórz kolejną o nazwie ```MallardDuck```. Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody ```print()``` typ kaczki zmienił się na "mallard". Stwórz obiekt ```daisyDuck```. Wywołaj dla niego wszystkie metody.


### Część 4

Stworzyłeś klasę ```Duck```. Mogą z niej dziedziczyć wszystkie kaczki. Twoim zadaniem teraz jest dodanie do odpowiedniej klasy metody ```fly()```. Metoda ma wypisywać w konsoli tekst "I'm flying...".


### Część 5

Na bazie  klasy ```Duck``` stwórz kolejną o nazwie ```RubberDuck```. Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody ```print()``` typ kaczki zmienił się na "rubber". Stwórz obiekt ```howardTheDuck```. Wywołaj dla niego wszystkie metody. Czy widzisz coś niepokojącego?

Twoja gumowa kaczka potrafi latać!

Nadpisz odpowiednio metodę ```fly()``` tak, aby po jej wywołaniu w przypadku gumowej kaczki wypisywał się w konsoli tekst "Rubber ducks can't fly!".