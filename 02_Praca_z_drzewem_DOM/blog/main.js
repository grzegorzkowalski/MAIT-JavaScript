//Zadanie 1

// pkt. 1
const header = document.querySelector(".about-blog__content-title");
console.log(header);

// pkt. 2
const logo = document.querySelector(".navigation-menu > img");
console.log(logo);

// pkt. 3
const blogForm = document.querySelector("form");
console.log(blogForm);

// pkt. 4
const link = document.querySelector('a[href="mailto:grzegorz@theadventurerblog.pl"]');
console.log(link);

//Zadanie 2

const galleryItems = Array.from(document.querySelectorAll(".gallery-main-photo"));
console.log(galleryItems);

//Zadanie 3

// pkt. 1
console.log(header.textContent);
console.log(header.innerText);

header.textContent = "    Interpretuje białe znaki   ";

// pkt. 2
console.log(logo.tagName);

// pkt. 3
const warsawLogo = "https://nowymarketing.pl/wp-content/uploads/2022/12/40680_l2-360x0-c-default.jpg";
logo.setAttribute("src", warsawLogo);

// pkt. 4
console.log(blogForm.innerHTML);

// pkt. 5
link.setAttribute("href", "kontakt@wwsi.edu.pl");

// pkt. 6
const headerClassName = header.className;
const headerClassList = header.classList.value;
console.log(headerClassName);
console.log(headerClassList);

// pkt. 7
// header.className = "";
// console.log(header.className);

header.classList.remove(headerClassList);
console.log(header.classList.value);
console.log(headerClassList);

// pkt. 8
//document.querySelector(".first-article__text-title").classList.add(headerClassList);
document.querySelector(".first-article__text-title").className += " " + headerClassList;

//Zadanie 4

const menuElement = document.createElement("li");
const menuElementLink = document.createElement("a");
menuElementLink.innerText = "oferta";
menuElementLink.setAttribute("href", "#oferta");
menuElement.append(menuElementLink);
const menu = document.querySelector(".navigation-menu > ul");
menu.style.width = "70%";
menu.append(menuElement);
