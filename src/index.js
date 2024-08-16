import "./styles.css";
import createHome from "./home/home.js";
import createMenu from "./menu/menu.js";
import createAbout from "./about/about.js";

function removeClickedStylingFromTabs() {
    for (const tab of document.querySelectorAll("nav>*")) {
        tab.classList.remove("last-clicked");
    }
}

export const pageContent = document.querySelector("#content");

let lastTabClicked = "home";
function clearPageContent() {
    while (pageContent.firstChild) {
        pageContent.removeChild(pageContent.lastChild);
    }
}

const homeButton = document.querySelector("#home-tab");
homeButton.addEventListener("click", () => {
    if (lastTabClicked !== "home") {
        lastTabClicked = "home";
        removeClickedStylingFromTabs()
        homeButton.classList.add("last-clicked");
        clearPageContent();
        createHome();
    }
});

const menuButton = document.querySelector("#menu-tab");
menuButton.addEventListener("click", () => {
    if (lastTabClicked !== "menu") {
        lastTabClicked = "menu";
        removeClickedStylingFromTabs()
        menuButton.classList.add("last-clicked");
        clearPageContent();
        createMenu();
    }
});

const aboutButton = document.querySelector("#about-tab");
aboutButton.addEventListener("click", () => {
    if (lastTabClicked !== "about") {
        lastTabClicked = "about";
        removeClickedStylingFromTabs()
        aboutButton.classList.add("last-clicked");
        clearPageContent();
        createAbout();
    }
});

homeButton.classList.add("last-clicked");
createHome();