const parents = document.querySelectorAll(".parent");

parents.forEach(function(el) {
    el.addEventListener("mouseenter", function() {
        this.children[0].style.display = "block";
    });

    el.addEventListener("mouseleave", function() {
        this.children[0].style.display = "none";
    });
})