
import { getParkData } from './parkService.mjs';

const parkData = getParkData();
const disclaimerLink = document.querySelector('.disclaimer > a');
disclaimerLink.href = parkData.url;
disclaimerLink.innerHTML = parkData.fullName;

document.title = parkData.fullName;

const heroImg = document.querySelector('.hero-banner img');
heroImg.src = parkData.images[0].url;
heroImg.alt = parkData.images[0].altText;

function parkInfoTemplate(info) {
  return `
    <a href="${info.url}" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>
  `;
}

const heroText = document.querySelector('.hero-banner__content');
heroText.innerHTML = parkInfoTemplate(parkData);
