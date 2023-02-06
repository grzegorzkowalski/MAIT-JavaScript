const boxes = document.querySelectorAll(".box");

boxes.forEach(function(el) {
    el.addEventListener("click", function() {
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = randomColor;
    })
});