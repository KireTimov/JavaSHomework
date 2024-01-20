
document.addEventListener('DOMContentLoaded', function () {
    let button = document.getElementById('button');

    button.onclick = function fetchPerson() {
        fetch('https://swapi.dev/api/people/1')
            .then(response => response.json())
            .then(data => {
                document.getElementById('personName').innerText = `${data.name}`;
                document.getElementById('height').innerText = `${data.height}`;
                document.getElementById('weight').innerText = `${data.mass}`;
                document.getElementById('eyeColor').innerText = `${data.eye_color}`;
                document.getElementById('hairColor').innerText = `${data.hair_color}`;
            })
            .catch(error => console.log('Error', error));
    };

   
});