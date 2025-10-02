import { getParkData, parkInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs"; 


function setParkIntro(data) {
  const introEl = document.querySelector(".intro");
  introEl.innerHTML = `
    <h1>${data.fullName}</h1>
    <p>${data.description}</p>
  `;
}



function setParkInfoLinks(links) {
  const infoEl = document.querySelector(".info");
  const html = links.map(mediaCardTemplate);
  infoEl.insertAdjacentHTML("afterbegin", html.join(""));
}

async function init() {
  try {
    const parkData = await getParkData(); 
    setHeaderFooter(parkData);           
    setParkIntro(parkData);              
    setParkInfoLinks(parkData);          
  } catch (error) {
    console.error("Error fetching park data:", error);
  }
}

init();
