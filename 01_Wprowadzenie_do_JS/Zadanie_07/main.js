const biggestCities = ["Tokio", "Delhi", "Szanghaj", "São Paulo", "Meksyk"];

const tab = [];
biggestCities.forEach(el => {
    let obj = {name: el, counter: 0};
    el.split("").forEach(el => {
        obj.counter++;
    })
    tab.push(obj);
});
console.log(tab);

biggestCities.sort((a,b) => b.length - a.length);
console.log(biggestCities[0]);

