const pizzas = ["Margherita", "Marinara", "Prosciutto e funghi", "Quattro Stagioni", "Capricciosa"];


for (let i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}

//classic function
pizzas.forEach(function (el) {
    console.log(el);
});

//arrow function
pizzas.forEach((el) => console.log(el));