let mainDetails = document.getElementById("mainDetails");
let beersDiv = document.getElementById("beersDiv");
let sortingDiv = document.getElementById("sortingDiv");
let searchBar = document.getElementById("search");
let pageSizeSelect = document.getElementById("page-size");
let sortBy = document.getElementById("sort-by");

let apiUrl = "https://api.punkapi.com/v2/beers";
mainDetails.innerHTML = '';
let beersData = [];

let beersApp = (api) => {
    fetch(api)
        .then((response) => response.json())
        .then((data) => {
            beersData = data;
            displayBeers(data);
        })
        .catch((error) => console.error("Error fetching beers:", error));
};

let displayBeers = (data, pageSize) => {
    beersDiv.innerHTML = ''; 

    
    pageSize = parseInt(pageSize) || data.length;

    for (let i = 0; i < pageSize && i < data.length; i++) {
        let printBeers = () => {
            beersDiv.innerHTML += `<div class="oneBeer">
            <img class="beerImg" src="${data[i].image_url}">
            <h3 class="beerName">${data[i].name}</h3>
            <p class="description">${data[i].tagline}</p>
            <button class="detailsButton" data-index="${i}">More Details</button>
            </div>`;
        };
        printBeers();
    }

    let buttons = document.querySelectorAll(".detailsButton");
    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            let index = event.target.dataset.index;
            sortingDiv.style.display = "block";

            sortingDiv.innerHTML = `
            <div id="details">
            <button id="closeButton" style="position: absolute; top: 0; right: 0;">x</button>

            <img class="detailsPics" src="${data[index].image_url}" alt="${data[index].name} image">
            <div id="infoBeer">
            <div id="nameBeer">
            <h2>${data[index].name}</h2>
            <h5>"${data[index].tagline}"</h5>
            </div>
            <div id="statsBeer">
            <h4 id="brewed">Brewed: ${data[index].first_brewed}</h4>
            <h4 id="alc">Alcohol: ${data[index].abv}</h4>
            <h4 id="bit">Bitterness: ${data[index].ph}</h4>
            </div>
            <div id="food">
            <h2>Food pairing</h2>
            <div id="allFoods">${data[index].food_pairing}</div>
            </div>
            </div>
            </div>`;

            let closeButton = document.getElementById("closeButton");
            closeButton.addEventListener("click", function() {
                sortingDiv.style.display = "none";
            });
        });
    });
};

beersApp(apiUrl);

searchBar.addEventListener("input", function() {
    let searchTerm = searchBar.value.toLowerCase();
    let filteredData = beersData.filter(beer => beer.name.toLowerCase().includes(searchTerm));
    displayBeers(filteredData, pageSizeSelect.value);
});

pageSizeSelect.addEventListener("change", function() {
    displayBeers(beersData, pageSizeSelect.value);
});

