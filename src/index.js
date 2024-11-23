import renderMenu from "./menu";
import renderAbout from "./about";
import "./style.css"

const navButtons = document.querySelectorAll('button');
const content = document.querySelector("#content");


renderHome();

navButtons.forEach(button => {

    
button.addEventListener('click', (event) => {

    content.innerHTML = '';


    
    if(event.target.tagName === "BUTTON"){

        const buttonId = event.target.id;
        if (buttonId === "home") {
        renderHome();
        
       
    }
    else if(buttonId=== "menu"){
        renderMenu();

    }
    else if(buttonId === "about"){
       renderAbout();
    }
   
    

}})



})




function renderHome(){

    

const introSection = document.createElement("div");
const heading = document.createElement("h1");
const introText = document.createElement('p');
const hoursSection = document.createElement("div");
const hoursHead = document.createElement('h2')
const timings = document.createElement('p');



introText.textContent = "Dive into the rich flavors of authentic Chinese cuisine at Golden Wok. From sizzling stir-fries to delicate dim sum, our dishes are crafted to bring you the best of traditional and modern Chinese cooking. Enjoy our cozy ambiance and exceptional service, perfect for every occasion."
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
heading.innerText = "Welcome to Golden Wok";
content.appendChild(heading)
content.appendChild(introSection);
introSection.appendChild(introText);
content.appendChild(hoursSection);

hoursSection.appendChild(hoursHead);
hoursSection.appendChild(timings);





}
