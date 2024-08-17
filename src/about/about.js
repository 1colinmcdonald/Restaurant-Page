import "./about.css";
import team from "../img/team.png";
import jake from "../img/Copy+of+Jake+Outside+2-01.png";
import jin from "../img/Copy+of+Jin+sitting+2.png";
import kiegan from "../img/kiegan.jpg";

export default function createAbout() {
    const pageContent = document.querySelector("#content");
    const about = document.createElement("div");
    const title = document.createElement("h1");
    title.classList.add("about-title");
    title.textContent = "A Northwest chef comes home.";
    about.appendChild(title);
    const teamImage = document.createElement("img");
    teamImage.src = team;
    teamImage.classList.add("team");
    about.appendChild(teamImage);
    const people = document.createElement("div");
    people.classList.add("people");
    people.appendChild(createEmployeeCard("jake", "Founder and Chef", "Jake Wilson",
        "Upon completion of culinary school in 2007, Edmonds native Jake Wilson began working at kitchens in and around the \
        Seattle area, including family favorites Ray’s Boathouse, Vios Cafe, and the Ballard Annex Oyster House. After \
        relocating to New York and working as a chef in Manhattan for three years, Jake returned to Edmonds to fulfill his \
        dream of opening his own restaurant in his hometown. Jake’s résumé reflects a commitment to delivering high-quality \
        food and cultivating a culture where the staff feels like family. When staff members feel taken care of, they will \
        treat customers like guests in their own home. These complementary skills are hard to come by, but Jake makes it \
        happen. The warm and inviting workplace he has created for his team resonates in the minds of consumers through the \
        service and the inviting atmosphere they find at Charcoal.", jake));
    people.appendChild(createEmployeeCard("jin", "General Manager", "Jin Link", "Upon completion of culinary school in 2007, Edmonds native Jake Wilson began working at kitchens in and around the \
        Seattle area, including family favorites Ray’s Boathouse, Vios Cafe, and the Ballard Annex Oyster House. After \
        relocating to New York and working as a chef in Manhattan for three years, Jake returned to Edmonds to fulfill his \
        dream of opening his own restaurant in his hometown. Jake’s résumé reflects a commitment to delivering high-quality \
        food and cultivating a culture where the staff feels like family. When staff members feel taken care of, they will \
        treat customers like guests in their own home. These complementary skills are hard to come by, but Jake makes it \
        happen. The warm and inviting workplace he has created for his team resonates in the minds of consumers through the \
        service and the inviting atmosphere they find at Charcoal.", jin));
    people.appendChild(createEmployeeCard("keigan", "Chef de Cuisine", "Keigan Powell", "Edmonds-born Keigan Powell  brings \
        15 years of kitchen experience to the table as Charcoal’s Chef de Cuisine. His grandmother was his inspiration for \
        all things culinary. She was an Edmonds resident who managed restaurants, and hosted exchange students where she \
        was exposed to the cuisine of many different cultures. Keigan brings this worldly view to his dishes, is excited to \
        share it with you! Keigan is a graduate of Le Cordon Bleu, and his experience at kitchens such as Toulouse Petit, \
        The Ballard Annex, Kickin’ Boot Whiskey Kitchen, and The Matador have prepared him bring the best to your table!", kiegan))
    about.appendChild(people);
    pageContent.appendChild(about);
}

function createEmployeeCard(cardClass, title, name, description, image) {
    const employeeCard = document.createElement("div");
    employeeCard.classList.add(cardClass);
    const employeeImage = document.createElement("img");
    employeeImage.src = image;
    employeeCard.appendChild(employeeImage);
    employeeCard.classList.add("card");
    const employeeInfo = document.createElement("div");
    const employeeTitle = document.createElement("div");
    const employeeName = document.createElement("div");
    employeeName.classList.add("employee-name");
    employeeName.textContent = name;
    employeeTitle.classList.add("employee-title");

    const employeeDescription = document.createElement("div");
    employeeDescription.classList.add("employee-description");
    employeeDescription.textContent = description;
    employeeTitle.textContent = title;
    employeeInfo.appendChild(employeeTitle);
    employeeInfo.appendChild(employeeName);
    employeeInfo.appendChild(employeeDescription);
    employeeCard.appendChild(employeeInfo);
    return employeeCard
}