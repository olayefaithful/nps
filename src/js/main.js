import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

document.querySelector(".hero-banner > img").src = parkData.images[0].url;
