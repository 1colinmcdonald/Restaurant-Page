import "./styles.css";
import createHome from "./home/home.js";
import createMenu from "./menu/menu.js";
import createAbout from "./about/about.js";

export const pageContent = document.querySelector("#content");

function clearPageContent() {
    while (pageContent.firstChild) {
        pageContent.removeChild(pageContent.lastChild);
    }
}

const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => {
    clearPageContent();
    createHome();
});

const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
    clearPageContent();
    createMenu();
});

const aboutButton = document.querySelector("#about");
aboutButton.addEventListener("click", () => {
    clearPageContent();
    createAbout();
});