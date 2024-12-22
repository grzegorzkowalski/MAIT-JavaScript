const parents = document.querySelectorAll(".parent");
console.log(parents);

parents.forEach(el => {
    el.addEventListener("mouseenter", function() {
        console.log(this);
        this.firstElementChild.style.display = "block";
        //this.children[0]
    });

    el.addEventListener("mouseleave", function() {
        this.firstElementChild.style.display = "none";
    });

    el.addEventListener("click", function() {
        this.firstElementChild.style.backgroundColor = "red";
    });

    el.addEventListener("dblclick", function() {
        this.firstElementChild.style.backgroundColor = "green";
    });

    el.addEventListener("contextmenu", function(ev) {
        ev.preventDefault();
        this.firstElementChild.style.backgroundColor = "gold";
    });
});