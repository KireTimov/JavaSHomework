const randomBeerDetails = document.getElementById("randomBeerDetails");


fetch("https://api.punkapi.com/v2/beers/random")
    .then(response => response.json())
    .then(data => {
        
        const randomBeer = data[0];
        
        
        randomBeerDetails.innerHTML = `
            <h2>${randomBeer.name}</h2>
            <p>${randomBeer.tagline}</p>
            <img src="${randomBeer.image_url}" alt="${randomBeer.name} image">
            <p>Brewed: ${randomBeer.first_brewed}</p>
            <p>Alcohol: ${randomBeer.abv}</p>
            <p>Bitterness: ${randomBeer.ph}</p>
            <h3>Food Pairing:</h3>
            <ul>
                ${randomBeer.food_pairing.map(food => `<li>${food}</li>`).join('')}
            </ul>
        `;
    })
    .catch(error => console.error("Error random beer:", error));