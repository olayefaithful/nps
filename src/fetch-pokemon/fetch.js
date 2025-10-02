setTimeout(function() {
    console.log("async");
}, 2000);
console.log('synchronous');

const urlList = "https://pokeapi.co/api/v2/pokemon/ditto";

async function getPokemonList(url){
   const response = await fetch(url);
   if (response.ok) {
    const data = await response.json();
    doStuffList(data);
   }

async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
}
function doStuffList(data){
    console.log(data);
    const PokeListElement = document.querySelector('#outputList');
    const PokeList =data.results;
    PokeList.forEach((currentItem)=> {
        const html =`<li> ${currentItem.name}</li>`;
        PokeListElement.innerHTMl += html;
    });
function doStuff(data) {
  results = data;
  const outputElement = document.querySelector("#output");
  const html = `<h2>${data.name}</h2><img src="${data.sprites.front_default}" alt="${data.name}">`;
  outputElement.innerHTML = html;
  console.log("first: ", results);
}

    }
    async function getPokemon(url) {

    }
getPokemon(url);
console.log("second: ", results);

getPokemonList(urlList);
