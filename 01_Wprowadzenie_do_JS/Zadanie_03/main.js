const sentenceA = "A to kawa kota";
const sentenceB = "Ala ma kota";

function isPalidrom(str) {
    const preperdString =
        str.replaceAll(" ", "").toLowerCase();
    const revertString = preperdString.split("").reverse().join("");
    console.log(preperdString, revertString);
    return preperdString === revertString;
}

console.log(isPalidrom(sentenceA));
console.log(isPalidrom(sentenceB));
