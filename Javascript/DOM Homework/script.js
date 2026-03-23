// DOM HOMEWORK – FAVORITE MOVIES
// ----------------------------------------------
// GOAL: Practice selectors, textContent, and creating/removing elements.

// STEP 1: Select the heading element with id "moviesTitle" and store
//         it in a variable.

// STEP 2: Select the paragraph with id "moviesInfo" and store it
//         in a variable.

// STEP 3: Select the list with id "moviesList" and store it in a variable.

// STEP 4: Change the textContent of moviesTitle to a new heading,
//         for example "Movie List".

// STEP 5: Use moviesList.children.length (or querySelectorAll)
//         to count how many movie items there are.
//         Store this number in a variable (for example, movieCount).

// STEP 6: Update moviesInfo.textContent to show a message like:
//         "You currently have X favorite movies in your list."
//         (Use the value of movieCount in the message.)

// STEP 7: Create a new li element for another movie using
//         document.createElement("li").
//         - Set its textContent to a new movie name.
//         - Add the class "movie-item" to it.
//         - Append it to moviesList.

// STEP 8: Select one of the existing movie items (for example,
//         the first one) and remove it using .remove().

// STEP 9: (Optional) After adding/removing, update moviesInfo again
//         to show the new total number of movies.

const moviesTitleEl = document.getElementById("moviesTitle");
const moviesInfoEl = document.getElementById("moviesInfo");
const moviesListEl = document.getElementById("moviesList");

// check if connected
console.log(moviesTitleEl);
console.log(moviesInfoEl);
console.log(moviesListEl);
 
moviesTitleEl.textContent = "Movie List";

// const movieCount = moviesListEl.children.length;
// moviesInfoEl.textContent = `You currently have ${movieCount} favorite movies in your list`; 

// Due to changes this 2 lines must be at the end of the code in order to keep working properly

const newList = document.createElement("li");
newList.classList.add("movie-item");
newList.textContent = "Inception";
moviesListEl.appendChild(newList);

document.querySelector(".movie-item").remove();

const movieCount = moviesListEl.children.length;
moviesInfoEl.textContent = `You currently have ${movieCount} favorite movies in your list`;

