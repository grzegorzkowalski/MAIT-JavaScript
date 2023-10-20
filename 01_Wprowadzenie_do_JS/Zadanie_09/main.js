const cake = "🎂";

const dateObj = new Date();
console.log(dateObj.getFullYear());
const age = dateObj.getFullYear() - 1986;

for (let i = 0; i < age; i++) {
    console.log(cake, i+1);
}
