function isPalidrom(text) {
    //console.log(text);
    const noSpaces = text.split(" ").join("").toLowerCase();
    //console.log(noSpaces);
    const reverseText = noSpaces.split("").reverse().join("");
    //console.log({reverseText});
    return noSpaces === reverseText;
}

console.log(isPalidrom("A to kawa kota"), "A to kawa kota");
console.log(isPalidrom("Ala ma kota"), "Ala ma kota");