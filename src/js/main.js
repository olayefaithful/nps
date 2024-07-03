/*
read data from a module file and generate HTML from it.
search hikes
use if statements to conditionally render markup: active class on the active nav link, add a class to make the header sticky when the page is scrolled.
use a url parameter string
pages must be responsive
Links: home, about, find a hike
    form: difficulty, length, name, distance to trailhead?


*/
const baseUrl = "https://developer.nps.gov/api/v1/";

async function getJson(url) {
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": "sZShApVdj9gCuhTu0hGhphcE3UqiRVW0IrIfjbR8"
    }
  };
  const response = await fetch(baseUrl + url, options);
  const data = await response.json();
  console.log(data);
  return data;
}

// getJson("parks");


