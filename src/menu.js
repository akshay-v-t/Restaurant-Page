
import "./style.css"

export default function(){
    
const content = document.querySelector("#content");
const introSection = document.createElement("div");
const heading = document.createElement("h1");
const introText = document.createElement('p');
const hoursSection = document.createElement("div");
const hoursHead = document.createElement('h2')
const timings = document.createElement('p');

introText.textContent = " Indulge in a variety of Chinese delicacies, each carefully prepared to delight your taste buds:"
hoursHead.innerText = "Menu"
hoursSection.classList.add("inner-section")
timings.innerHTML = `
  
  <ul>
    <li><strong>Starters:</strong> Spring Rolls, Dumplings, Hot and Sour Soup.</li>
    <li><strong>Main Course:</strong> Kung Pao Chicken, Szechuan Beef, Mapo Tofu.</li>
    <li><strong>Noodles and Rice:</strong> Chow Mein, Fried Rice, Dan Dan Noodles.</li>
    <li><strong>Desserts:</strong> Mango Pudding, Sesame Balls, Fortune Cookies.</li>
    <li><strong>Drinks:</strong> Jasmine Tea, Bubble Tea, Plum Wine.</li>
  </ul>`;


introSection.classList.add("inner-section");
heading.innerText = "Explore Our Menu";
content.appendChild(heading)
content.appendChild(introSection);
introSection.appendChild(introText);
content.appendChild(hoursSection);
hoursSection.appendChild(hoursHead);
hoursSection.appendChild(timings);
}