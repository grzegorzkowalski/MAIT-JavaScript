// //Zadanie 1
//
// const head = document.querySelector(".about-blog__content-title");
// console.log(head);
//
// const navigatorLogo = document.querySelector(".navigation-menu img");
// console.log(navigatorLogo);
//
// const form = document.querySelector("form");
// console.log(form);
//
// const mail = document.querySelector(".e-mail a");
// const mail2 = document.querySelector("[href='mailto:grzegorz@theadventurerblog.pl']");
// console.log(mail);
// console.log(mail2);
//
//
// //Zadanie 2
//
// const galleryItems = document.querySelectorAll(".gallery-main-photo");
// console.log(galleryItems);
//
// galleryItems.forEach(el => {
//     let image = el.querySelector("img");
//     console.log(image.src);
// });
//
// //Zadanie 3
//
// console.log(head.innerText);
// head.innerText = "Kowal jedzie na wycieczkę.";
//
// // console.log(navigatorLogo.tagName.toLowerCase());
// // const legoLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png"
// // navigatorLogo.setAttribute("src", legoLogo);
//
// console.log(form);
//
// mail.setAttribute("href", "mailto:grzegorzkowalski@yahoo.com");
// const paragraf = document.querySelector(".e-mail p");
// paragraf.innerText = "grzegorzkowalski@yahoo.com";
//
// const headerClass = head.className;
// const headerClass2 = head.classList;
// console.log(headerClass);
// console.log(headerClass2);
//
// head.classList.add("KubuśIProsiaczek");
// console.log(head);
//
// // head.className = "";
// console.log(head);
//
// head.classList.remove("about-blog__content-title");
//
// const elToReplace = document.querySelectorAll(".first-article__text-title");
//
// const elementToReplace = document.querySelector(".first-article__text-title");
// elementToReplace.classList.add(head.className);
// elementToReplace.textContent = head.className;
//
// //Zadanie 4
//
// const newP = document.createElement("p");
// newP.innerText = "testowy paragraf";
// newP.id = "1234uniq";
// elementToReplace.after(newP);
//
// //Zadanie 5
//
// const newPclone = newP.cloneNode(true);
// newPclone.innerText = "Klon";
// newP.before(newPclone);
//
// //Zadanie 6
//
// const elementToDelete = document.querySelector(".about-blog__content--welcome-text");
// console.log(elementToDelete);
//
// elementToDelete.remove();
//
// /* Dzień Style i zdarzenia */
//
// //zadanie 1
// head.style.color = "tomato";
// console.log(head);
//
// head.style.fontSize = "36px";
// head.style.textDecoration = "underline";
//
//
// //zadanie 2
//
// // const formButton = document.querySelector(".form-button");
//
// // formButton.addEventListener("click", function (e) {
// //     e.preventDefault();
// //
// //     form.classList.add("hide");
// //
// //     const newParagraf = document.createElement("p");
// //     newParagraf.innerText = "Formularz wysłano poprawnie";
// //     newParagraf.style.color = "green";
// //     newParagraf.style.fontSize = "36px";
// //     newParagraf.style.margin = "0 auto";
// //     document.querySelector(".contact-and-social-media").after(newParagraf);
// // })
//
// const formButton = document.querySelector(".form-button");
// formButton.addEventListener("click", function(e) {
//     e.preventDefault();
//     form.classList.add("hide");
//     const newParagraph = document.createElement("p");
//     newParagraph.innerText = "Formularz wysłany";
//     newParagraph.style.color = "green";
//     newParagraph.style.fontSize = "36px";
//     form.before(newParagraph);
// })
//

//zadanie 3

const laosHeader = document.querySelector(".first-article__text-title");
console.log(laosHeader);

laosHeader.addEventListener("mouseenter", function() {
    console.log(this);
    this.style.color = "red";
    this.parentElement.previousElementSibling.style.width = "50vw";
    this.parentElement.previousElementSibling.setAttribute("style", "background-image: url(img/kowal2.png)!important");
});

laosHeader.addEventListener("mouseleave", function() {
    console.log(this);
    this.style.color = "black";
});
