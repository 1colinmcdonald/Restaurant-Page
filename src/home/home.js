import meal1 from "./../img/meal1.png";
import meal2 from "./../img/meal2.jpg"
import "./home.css";
import { pageContent } from "../index";

export default function createHome() {
    const home = document.createElement("div");
    home.classList.add("home-container");
    const header = document.createElement("h1");
    header.textContent = "Experience modern American cuisine that feels right at home in \
    the new Graphite Arts Center in downtown Edmonds";
    header.classList.add("home-header");
    home.appendChild(header);
    const video = document.createElement("iframe");
    video.width = "900";
    video.height = "477";
    video.src = "https://www.youtube.com/embed/1DLyRXXB0Ho";
    home.appendChild(video);
    const mealImage1 = document.createElement("img");
    mealImage1.src = meal1;
    mealImage1.alt = "delicious meal";
    home.appendChild(mealImage1);
    const mealImage2 = document.createElement("img");
    mealImage2.src = meal2;
    mealImage2.alt = "delicious meal";
    home.appendChild(mealImage2);

    pageContent.appendChild(home);
}