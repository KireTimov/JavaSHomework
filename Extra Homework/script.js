// let mainDetails = document.getElementById("mainDetails")
// let beersDiv = document.getElementById("beersDiv")
// let sortingDiv = document.getElementById("sortingDiv");



// let apiUrl = "https://api.punkapi.com/v2/beers";
// mainDetails.innerHTML = ' ';
// let beersApp = (api) => {
//   fetch(api)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     return data;
//   })
//   .then((data) => {
//     for(let i in data){
//       let printBeers = () => {
//         beersDiv.innerHTML += `<div class = "oneBeer">
//         <img class="beerImg" src = "${data[i].image_url}">
//         <h3 class = "beerName">${data[i].name}</h3>
//         <p class = "description">${data[i].tagline}</p>
//         <button class = "detailsButton"><a onclick="window.scrollTo (0,0)">More Details</a></button>
//         </div>`;


//       };
//       printBeers()
//     }

//     let buttons = document.querySelectorAll(".detailsButton");
//     for(let j = 0; j < buttons.length; j++){
//       buttons[j].addEventListener("click", () =>{
//         sortingDiv.innerHTML = `
//         <div id ="details">
//         <button id="closeButton">x</button>
        
       
      

//         <img class="detailsPics" src="${data[j].image_url}" alt="${data[j].name} image">
//         <div id="infoBeer">
//         <div id="nameBeer">
//         <h2>${data[j].name}</h2>
//         <h5>"${data[j].tagline}"</h5>
//         </div>
//         <div id="statsBeer">
//                                     <h4 id="brewed">Brewed: ${data[j].first_brewed}</h4>
//                                     <h4 id="alc">Alcohol: ${data[j].abv}</h4>
//                                     <h4 id="bit">Bitterness: ${data[j].ph}</h4>
//                                 </div>
//                                 <div id="food">
//                                     <h2>Food pairing</h2>
//                                     <div id="allFoods">${data[j].food_pairing}</div>
//                                 </div>
//                             </div>
//                         </div>`;
                        
        
        

//       })
//     }
//     return data;
//   })
//   .catch((error) => console.error("Error fetching beers:", error));

// };
// beersApp(apiUrl);

// let closeButton = document.getElementById("closeButton");


let mainDetails = document.getElementById("mainDetails");
let beersDiv = document.getElementById("beersDiv");
let sortingDiv = document.getElementById("sortingDiv");

let apiUrl = "https://api.punkapi.com/v2/beers";
mainDetails.innerHTML = '';

let beersApp = (api) => {
    fetch(api)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        return data;
    })
    .then((data) => {
        for (let i in data) {
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
                sortingDiv.innerHTML = `
                <div id="details">
                <button id="closeButton">x</button>

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
            sortingDiv.style.display = "none"; // Hide sortingDiv
        });
            });
        });
        return data;
    })
    .catch((error) => console.error("Error fetching beers:", error));
};

beersApp(apiUrl);

