export function destruct() {
    //Zadanie 5
    const cat = {
        name: "Mruczek",
        age: 10,
        getVoice: () => "miau miau"
    };

    const showAnimal = ({name, age: catAge, getVoice}) => {
        return `Kot ${name} ma ${catAge} lat i robi ${getVoice()}.`
    }

    console.log(showAnimal(cat));
}