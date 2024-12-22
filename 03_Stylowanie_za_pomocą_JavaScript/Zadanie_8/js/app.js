const divs = document.querySelectorAll(".box");

divs.forEach(el => {
    el.addEventListener("click", function () {
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = randomColor;
    })
})