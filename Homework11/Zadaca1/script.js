
document.addEventListener('DOMContentLoaded', function () {
    let button = document.getElementById('button');
    button.onclick = function MovieApp() {
        let arrMovies = ['Transporter', 'Gemini Man', 'Jumanji', 'Rambo','Spiderman'];
        let userInput = document.getElementById('input');

        let movieFound;

        for (let i = 0; i < arrMovies.length; i++) {
            let movie = arrMovies[i]; 
            if (userInput.value.toLowerCase() === movie.toLowerCase()) {
                movieFound = true;
                break; 
            }
        }
        document.getElementById('naslov').style.color="lightblue";

        if (movieFound) {
            document.getElementById('naslov').innerHTML = '<h3>The movie can be rented</h3>';
        } else {
            document.getElementById('naslov').innerHTML = '<h3>The movie cannot be rented</h3>';
        }
    }
});