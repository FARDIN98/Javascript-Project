// Get the joke container element from the DOM using its ID
const jokeContainer = document.getElementById('joke');

// Get the button element from the DOM using its ID
const btn = document.getElementById('btn');

// Define the URL for the API that provides programming jokes, with certain blacklist flags
const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

// Define a function to fetch a joke from the API and display it in the joke container
let getJoke = () => {
    fetch(url) // Fetch the joke data from the API
    .then(data => data.json()) // Convert the response data to JSON
    .then(item => { // Extract the joke from the JSON response
        jokeContainer.innerText = `${item.joke}`; // Display the joke in the joke container
    });
}

// Add a click event listener to the button, which triggers the getJoke function when clicked
btn.addEventListener("click", getJoke);

// Call the getJoke function to display a joke when the page loads
getJoke();
