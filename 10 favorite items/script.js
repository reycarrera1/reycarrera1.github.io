// Create an array containing 10 favorite items
let favorites = [
    "Music",
    "Movies",
    "Video Games",
    "Pizza",
    "Tacos",
    "Traveling",
    "Technology",
    "Reading",
    "Football",
    "Spending Time with my Daughter"
];

// Find the ordered list in the HTML page
let list = document.getElementById("favorites-list");

// Use a for loop to display each item
for (let i = 0; i < favorites.length; i++) {

    // Create a new list item
    let item = document.createElement("li");

    // Put the current favorite item inside the list item
    item.textContent = favorites[i];

    // Add the item to the webpage
    list.appendChild(item);
}