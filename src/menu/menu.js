export default function createMenu() {
    const menu = document.createElement("div");
    const title = document.createElement("h1");
    title.textContent = "Our Menu";
    menu.appendChild(title);
    const pageContent = document.querySelector("#content");
    pageContent.appendChild(menu);
    
}