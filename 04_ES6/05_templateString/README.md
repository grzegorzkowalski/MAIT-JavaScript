## Zadanie 1



Stwórz dwie zmienne, które będą przechowywały dowolne liczby. Następnie wypisz ich sumę w konsoli korzystając z łańcucha szablonowego (Template strings).

Przykład:

```plain
Suma dwóch liczb 2 i 4 to: 6
```


## Zadanie 2



Stwórz funkcję ```whoAreYou()```, której celem będzie **zwrócenie**  stringa (przykład niżej), na podstawie przekazanego do niej obiektu ```person```.


```js
const person = {
  name: "Vlad",
  lastName: "Drăculea",
  yearOfBirth: 1431,
  profession: "Lord of Wallachia"
};

whoAreYou(person);
```

```HTML
My name is Vlad Drăculea.
I am 586 years old.
My profession is Lord of Wallachia.
```
## Zadanie 3

Stwórz funkcję `describeProduct()`, której celem będzie zwrócenie opisu produktu w postaci stringa (przykład poniżej), na podstawie przekazanego do niej obiektu product.

Przykład
```js
const product = {
name: "Laptop Pro",
brand: "TechCorp",
price: 1499.99,
discount: 0.15,
inStock: true
};

describeProduct(product);
```



### Rezultat:

```
The product "Laptop Pro" by TechCorp is priced at $1499.99.
After a 15% discount, the price is $1274.99.
This product is currently in stock.
```