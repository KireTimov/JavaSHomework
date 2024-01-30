let api = "https://dummyjson.com/products";

fetch(api)

  .then((response) => response.json())
  .then((products) => {
    console.log(` All Products`);
    console.log(products);

    
    // Laptops sorted by descending
    console.log("Laptops sorted by descending");
    const sortLaptopsByPrice = (items) =>
    items.filter((item) => item.category === "laptops").sort((a, b) => b.price - a.price);

const sortedLaptops = sortLaptopsByPrice(products.products);
console.log(sortedLaptops);
// First gorcery item

console.log("First grocery item");
let firstGroceryItem = (items) =>
items.find((item)=> item.category === "groceries");

const firstItem = firstGroceryItem(products.products);
console.log(firstItem);

// Index of the first "Samsung" smartphone
console.log("Index of the first Samsung smartphone");

const firstSamsung = (items) =>

 items.indexOf((item)=> item.category === "smartphones" && item.brand === "Samsung");
const firstSamgungPhone = firstSamsung(products.products);

console.log(firstSamgungPhone); // za ovaa zadaca ne sum siguren dali treba vaka i dali e tocno, no se obidov da ja resam.

// Check if there is any item from the brand "Sony"
console.log("Check if there is any item from the brand Sony ");
const sonyItem = (items) => items.includes((item) => item.brand === "Sony");
const isThereSonyProduct = sonyItem(products.products);
console.log(isThereSonyProduct);

// The name of the highest rated skincare product
console.log("The name of the highest rated skincare product:");


let skinCare = (item) => {
    let skinCareHighest = item.filter((item) => item.category === "skincare").sort((a, b) => b.rating - a.rating);
    console.log(skinCareHighest[0]);
  };
  skinCare(products.products);


//   The average discount percentage of products with a rating above 4.5
console.log("The average discount percentage of products with a rating above 4.5:");


const averageDiscount = (items) => {
    const ratingAbove = items.filter(item => item.rating > 4.5);
    const avrDisc = ratingAbove.reduce((total, currentItem) => total + currentItem.discountPercentage, 0) / ratingAbove.length;
    return avrDisc;
  };
  
  const discount = averageDiscount(products.products);
  console.log(`${discount}`);

//   Find the product with the highest price
console.log("Find the product with the highest price");

const productWithHighestPrice = (items) =>{
    const highestPrice = items.sort((a,b)=> b.price - a.price);
    return highestPrice;
    
}
const highestPrice = productWithHighestPrice(products.products)
console.log(highestPrice[0]);

// Average price of all IPhone smartphones
console.log("Average price of all IPhone smartphones");

let averagePriceOfIphones= (item) => {
    let averagePrice = item.filter((item) => item.brand === "Apple" && item.category ==='smartphones');
    let price = averagePrice.reduce(
      (acc, curr) => acc + curr.price / averagePrice.length,0);
    return price;
  };
  let price = averagePriceOfIphones(products.products);
  console.log(`${price}`);

//   The product with the lowest price
console.log("The product with the lowest price");

const lowestPriceProduct = (items) => {
    const lowestPrice = items.sort((a,b) => a.price - b.price);
    return lowestPrice
}
const lowestPrice = lowestPriceProduct(products.products);
console.log(lowestPrice[0]);


  



});