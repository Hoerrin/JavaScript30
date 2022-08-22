const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let cities = [];
const input = document.getElementsByClassName("listInput")[0];
const list = document.getElementsByClassName("list")[0];

const getData = async () => {
  await fetch(endpoint)
    .then((response) => response.json())
    .then((data) => (cities = data))
    .catch((err) => console.log(err));
};

getData();

const fillList = () => {
  list.innerHTML = null
  filteredCities = cities.filter(item => input.value ? item.city.toLowerCase().includes(input.value.toLowerCase()) || item.state.toLowerCase().includes(input.value.toLowerCase()) : null)
  for (const item of filteredCities) {
    let listItem = document.createElement('li')
    let cityFoundPosition = item.city.toLowerCase().indexOf(input.value)
    let citySlicedBegin = (cityFoundPosition == -1) ? '' : item.city.slice(0, cityFoundPosition)
    let citySlicedFound = item.city.slice(cityFoundPosition, (cityFoundPosition + input.value.length))
    let citySliceEnd = (cityFoundPosition == -1) ? item.city : item.city.slice((cityFoundPosition + input.value.length))

    let stateFoundPosition = item.state.toLowerCase().indexOf(input.value)
    let stateSlicedBegin = (stateFoundPosition == -1) ? '' : item.state.slice(0, stateFoundPosition)
    let stateSlicedFound = item.state.slice(stateFoundPosition, (stateFoundPosition + input.value.length))
    let stateSliceEnd = (stateFoundPosition == -1) ? item.state : item.state.slice((stateFoundPosition + input.value.length))

    listItem.innerHTML = `<div class="">${citySlicedBegin}<mark>${citySlicedFound}</mark>${citySliceEnd}, ${stateSlicedBegin}<mark>${stateSlicedFound}</mark>${stateSliceEnd}</div> <div class="">${parseInt(item.population).toLocaleString('en-US')}</div>`
    list.append(listItem);
  }
};

input.addEventListener("input", fillList);

