//Zadanie 1

const weather = [ "snow", "rain", "sun" ];

//const snow = weather[0];
//const sun = weather[2];
const [snow,,sun] = weather;

console.log(snow, "to nowy snow :)");
console.log(sun);


//Zadanie 2
const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
}

const {type, autoStart } = slider;
console.log(type, "type");
console.log(autoStart, "autoStart");
