import "./menu.css"
export default function createMenu() {
    const menu = document.createElement("div");
    const title = document.createElement("h1");
    title.textContent = "Our Menu";
    title.classList.add("menu-title");
    menu.appendChild(title);
    const pageContent = document.querySelector("#content");
    menu.appendChild(generateMenuItem("charcoal grilled steak", "duck fat potato pave, green beans, horseradish puree, charred leek & marrow butter", "| 8 oz prime picanha $47 | 12 oz prime NY Strip $66 | 16 oz prime ribeye $76"));
    menu.appendChild(generateMenuItem("ash rubbed pork tenderloin | GF", "8 oz carton farms pork tenderloin, caramelized carrot puree, duck fat braised cabbage, pickled apple & pea vine slaw, pinot noir gastrique", "$32"));
    menu.appendChild(generateMenuItem("duck breast | GF", "8 oz maple leaf duck breast, cherry & basil reduction, 5 spice sweet potato purée, swiss chard, polenta coin", "$37"));
    menu.appendChild(generateMenuItem("scallops | GF", "swiss chard romanesco, pancetta, golden beet puree, jalapeno tartar", "$48"));
    menu.id = "menu";
    pageContent.appendChild(menu);
}

function generateMenuItem(name, description, prices) {
    const menuItem = document.createElement("div");
    const menuItemName = document.createElement("div");
    menuItemName.classList.add("menu-item-name");
    const menuItemDescription = document.createElement("div");
    menuItemDescription.classList.add("menu-item-description");
    const menuItemPrices = document.createElement("div");
    menuItemPrices.classList.add("menu-item-prices");
    menuItemName.textContent = name;
    menuItemDescription.textContent = description;
    menuItemPrices.textContent = prices;
    menuItem.appendChild(menuItemName);
    menuItem.appendChild(menuItemDescription);
    menuItem.appendChild(menuItemPrices);
    menuItem.classList.add("menu-item");
    return menuItem;
}