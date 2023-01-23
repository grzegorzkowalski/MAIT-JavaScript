//Zadanie 1

const head = document.querySelector(".about-blog__content-title");
console.log(head);

const navigatorLogo = document.querySelector(".navigation-menu img");
console.log(navigatorLogo);

const form = document.querySelector("form");
console.log(form);

const mail = document.querySelector(".e-mail a");
const mail2 = document.querySelector("[href='mailto:grzegorz@theadventurerblog.pl']");
console.log(mail);
console.log(mail2);


//Zadanie 2

const galleryItems = document.querySelectorAll(".gallery-main-photo");
console.log(galleryItems);

galleryItems.forEach(el => {
    let image = el.querySelector("img");
    console.log(image.src);
});

//Zadanie 3

console.log(head.innerText);
head.innerText = "Kowal jedzie na wycieczkę.";

console.log(navigatorLogo.tagName.toLowerCase());
const legoLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png"
navigatorLogo.setAttribute("src", legoLogo);

console.log(form);

mail.setAttribute("href", "mailto:grzegorzkowalski@yahoo.com");
const paragraf = document.querySelector(".e-mail p");
paragraf.innerText = "grzegorzkowalski@yahoo.com";

const headerClass = head.className;
const headerClass2 = head.classList;
console.log(headerClass);
console.log(headerClass2);

head.classList.add("KubuśIProsiaczek");
console.log(head);

// head.className = "";
console.log(head);

head.classList.remove("about-blog__content-title");

const elToReplace = document.querySelectorAll(".first-article__text-title");

const elementToReplace = document.querySelector(".first-article__text-title");
elementToReplace.classList.add(head.className);
elementToReplace.textContent = head.className;

//Zadanie 4

const newP = document.createElement("p");
newP.innerText = "testowy paragraf";
newP.id = "1234uniq";
elementToReplace.after(newP);

//Zadanie 5

const newPclone = newP.cloneNode(true);
newPclone.innerText = "Klon";
newP.before(newPclone);

//Zadanie 6

const elementToDelete = document.querySelector(".about-blog__content--welcome-text");
console.log(elementToDelete);

elementToDelete.remove();
