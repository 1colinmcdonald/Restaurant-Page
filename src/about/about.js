export default function createAbout() {
    const pageContent = document.querySelector("#content");
    const about = document.createElement("div");
    const title = document.createElement("h1");
    title.textContent = "A Northwest chef comes home.";
    about.appendChild(title);
    pageContent.appendChild(about);
}