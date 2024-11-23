
import "./style.css"


export default function(){
    
const content = document.querySelector("#content");
const introSection = document.createElement("div");
const heading = document.createElement("h1");
const introText = document.createElement('p');
const hoursSection = document.createElement("div");
const hoursHead = document.createElement('h2')
const timings = document.createElement('p');

introText.textContent = "At Golden Wok, we believe food is an art. Our journey began with a passion for sharing the diverse flavors of Chinese culture. Every dish on our menu is prepared with fresh ingredients, time-honored techniques, and a touch of creativity. Step into our restaurant, and you'll find more than just great food—you’ll find a place where tradition and hospitality meet."
hoursHead.innerText = "Hours"
hoursSection.classList.add("inner-section")
timings.innerText=`Sunday: 8am - 8pm 
Monday: 6am - 6pm 
Tuesday: 6am - 6pm 
Wednesday: 6am - 6pm 
Thursday: 6am - 10pm 
Friday: 6am - 10pm 
Saturday: 8am - 10pm`;


introSection.classList.add("inner-section");
heading.innerText = "About Golden Wok";
content.appendChild(heading)
content.appendChild(introSection);
introSection.appendChild(introText);
content.appendChild(hoursSection);
hoursSection.appendChild(hoursHead);
hoursSection.appendChild(timings);

}
