let api = `https://dummyjson.com/recipes`;

fetch(api)
.then(response => response.json())
.then(recipes => {
    console.log('All Deserts');
    console.log(recipes);

    // Get the names of recipes with more than 30 reviews
    console.log("Get the names of recipes with more than 30 reviews");

    
    let recipesWithMoreReviewsThan30 = (item) =>{
        let recipe = item.filter(item => item.reviewCount > 30);
        return recipe;
    }
    console.log(recipesWithMoreReviewsThan30(recipes.recipes));

    //All recipes that use Cinnamon as an ingredient
    console.log("All recipes that use Cinnamon as an ingredient");
    let includeCinnamon = (item) =>{
        let recipes = item.filter(item => item.ingredients.includes("Cinnamon"));
        return recipes;
    }
    console.log(includeCinnamon(recipes.recipes));


    // The ingredients needed for "Mango Salsa Chicken" dish
    console.log("The ingredients needed for Mango Salsa Chicken dish");
    let ingredientsNeededForMangoSalsa = (item) =>{
        let ingredient = item.find(item => item.name === "Mango Salsa Chicken").ingredients
        return ingredient;
    }
    console.log(ingredientsNeededForMangoSalsa(recipes.recipes));

    //Calculate the average number of calories for all American cusine recipes
    console.log("Calculate the average number of calories for all American cusine recipes");

    let averageCalories = (item) =>{
        let americanCuisine = item.filter(item => item.cuisine == `American`)
        let averageNumberOfCalories = americanCuisine.reduce((a, b) => a + b.caloriesPerServing / americanCuisine.length, 0);
        return averageNumberOfCalories
    }
    console.log(`${averageCalories(recipes.recipes)} `)

   
    //The average cooking time of all pasta recipes
    console.log("The average cooking time of all pasta recipes:");

    let averageCookingTime = (item) => {
        let pasta = item.filter(item => item.name.includes("Pasta"));
        // console.log(pasta);
        let pastaCooking = pasta.reduce((a,b) => a + b.cookTimeMinutes / pasta.length, 0)
        return pastaCooking;

    }
    console.log(`${averageCookingTime(recipes.recipes)} minutes`);


    //Find the recipe with the lowest number of reviews
    console.log("Find the recipe with the lowest number of reviews");

    let recipeWithTheLowestNumberOfReviews = (item) =>{
        let recipe = item.sort((a,b) => a.reviewCount - b.reviewCount);
        return recipe;
    }
    console.log(recipeWithTheLowestNumberOfReviews(recipes.recipes)[0]);
});