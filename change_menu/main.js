// Array of category short names
const categories = ["Lunch", "Dinner", "Sushi", "Appetizers", "Desserts"];

// Function to get a random category
function getRandomCategory() {
  const randomIndex = Math.floor(Math.random() * categories.length); // Random index
  return categories[randomIndex]; // Return the category at the random index
}

// Wait for the DOM to load
window.onload = function() {
  // Get a random category
  const randomCategory = getRandomCategory();

  // Find the Specials tile link and update the onclick attribute
  const specialsTileLink = document.querySelector("#specials-tile a");
  specialsTileLink.setAttribute("onclick", `$dc.loadMenuItems('${randomCategory}');`);
};
