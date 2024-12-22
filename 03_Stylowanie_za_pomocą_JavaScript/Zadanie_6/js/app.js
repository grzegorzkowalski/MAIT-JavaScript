const buttons = document.querySelectorAll(".btn");

const counter = document.querySelector(".counter");
counter.style.color = "black";
buttons.forEach(el => {
    el.addEventListener("click", function () {
        counter.innerText = parseInt(counter.innerText) + 1;
    })
})
