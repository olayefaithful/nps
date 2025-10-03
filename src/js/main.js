import { getParkData, getInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs"; 


function setParkIntro(data) {
  const introEl = document.querySelector(".intro");
  introEl.innerHTML = `
    <h1>${data.fullName}</h1>
    <p>${data.description}</p>`;
  
}



function setParkInfoLinks(data) {
  console.log(data);
  const infoEl = document.querySelector(".info");
  const html = data.map(mediaCardTemplate);
  infoEl.insertAdjacentHTML("afterbegin", html.join(""));
}

async function init() {
  
    const parkData = await getParkData(); 
    const links = getInfoLinks(parkData.images);
    setHeaderFooter(parkData);           
    setParkIntro(parkData);              
    setParkInfoLinks(links);          
  }


init();
