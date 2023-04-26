### Używamy tylko komponentów funkcyjnych.


## Zadanie 1

Stwórz komponent `Hello`.

Ma wyświetlać element `form`, a w nim `input type="text"` oraz `h1`. W `h1` ma się wyświetlać "Hello, `{name}`". `{name}` ma być na żywo tym, co wpisał użytkownik, a **domyślnie ma to być "Ty"**.


## Zadanie 3

Stwórz komponent funkcyjny `CarList`.

Ma renderować element `div`, a w nim elementy `p` i `select` oraz `span`.

Podczas wybierania opcji z elementu `select` (dodaj listę samochodów) ma się ona na żywo pokazywać w `p`, a w elemencie `span` liczba znaków wybranego elementu.



## Zadanie 4

Stwórz komponent klasowy `AddTwoNumbers`.

Ma renderować `form`, a w nim dwa `input type="text"` oraz `h1`. W `h1` ma się na żywo wyświetlać wynik dodawania dwóch liczb. Pobieraj je z elementów `input` pamiętając o konwersji na typ `Number`.

Jeżeli któraś dana z elementów `input` po konwersji da NaN (użyj `isNaN()`), to wypisz w `h1` "Podaj dwie liczby.".



## Zadanie 5

Stwórz komponent funkcyjny `SelectOrType`. Przez props ma przyjmować tablicę `items`.

Ma renderować `form`, a w nim `select`. Stwórz elementy `option` w `select`:
- Takie, jakie zostały przekazane w props w `items`,
- Oraz dodatkową ostatnią pozycję "Inne".

Jeżeli użytkownik wybierze ostatnią pozycję - wyświetl pod elementem `select` elementy `input type="text"` oraz `button` (w praktyce one będą tam cały czas, tylko domyślnie ukryte).

Po wpisaniu dowolnej treści i zatwierdzeniu przyciskiem zmień ostatnią pozycję "Inne" na to, co wpisał użytkownik, zaznacz tę pozycję i zamknij menu.

Po ponownym wybraniu jakiejś innej pozycji i powrocie do ostatniej - cały czas powinno działać wyświetlanie i zmiana.

Wyrenderuj `SelectOrType` z props `items` ustawionym na `["BMW", "Jaguar", "Porsche"]`.
