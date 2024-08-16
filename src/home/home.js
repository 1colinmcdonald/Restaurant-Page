import meal from "./../img/meal.png";
import "./home.css";
import {pageContent} from "../index";

export default function createHome() {
    const home = document.createElement("div");
    const header = document.createElement("h1");
    header.textContent = "Experience modern American cuisine that feels right at home in \
    the new Graphite Arts Center in downtown Edmonds";
    // const pageContent = document.querySelector("#content");
    home.appendChild(header);
    const mealImage = document.createElement("img");
    mealImage.src = meal;
    mealImage.alt = "delicious meal";
    home.appendChild(mealImage);
    const video = document.createElement("iframe");
    video.width = "420";
    video.height = "315";
    video.src = "https://www.youtube.com/embed/1DLyRXXB0Ho";
    home.appendChild(video);
    pageContent.appendChild(home);
}