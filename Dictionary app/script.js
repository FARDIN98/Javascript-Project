// Declare and initialize a constant variable 'url' with the API endpoint for dictionary lookup
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

// Get the HTML element with the id "result" and assign it to the variable 'result'
const result = document.getElementById("result");

// Get the HTML element with the id "sound" and assign it to the variable 'sound'
const sound = document.getElementById("sound");

// Get the HTML element with the id "search-btn" and assign it to the variable 'btn'
const btn = document.getElementById("search-btn");

// Add an event listener to the button with the id "search-btn"
btn.addEventListener("click", () => {
    // Get the value of the input field with the id "inp-word" and assign it to the variable 'inpWord'
    let inpWord = document.getElementById("inp-word").value;

    // Make a fetch request to the dictionary API with the input word appended to the URL
    fetch(`${url}${inpWord}`)
        .then((response) => response.json()) // Parse the response as JSON
        .then((data) => {
            console.log(data); // Log the retrieved data to the console

            // Update the 'result' HTML element with the following content
            result.innerHTML = `
                <div class="word">
                    <h3>${inpWord}</h3>
                    <button onclick="playSound()">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                <p class="word-meaning">
                    ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>`;

            // Set the 'src' attribute of the 'sound' HTML element to the audio URL from the retrieved data
            sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
        })
        .catch(() => {
            // If an error occurs during the fetch request, update the 'result' HTML element with an error message
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});

// Function to play the sound
function playSound() {
    sound.play(); // Play the audio using the 'play' method of the 'sound' HTML element
}
