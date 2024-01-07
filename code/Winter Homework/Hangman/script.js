
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  
  const buttonsContainer = document.getElementById('buttons');

  
  for (let i = 0; i < alphabets.length; i++) {
    const letter = alphabets[i];

    
    const button = document.createElement('button');
    button.className = 'alphabets';
    button.textContent = letter;
    button.onclick = function () {
      printLetter(letter);
    };

    
    buttonsContainer.appendChild(button);
  }

  let category = document.getElementById('category');
  let lives = document.getElementById('lives');
  let clue = document.getElementById('clue');
  let hint = document.getElementById('hint');

  let startingLives = 10;
  let currentWord;
  let category1 = [
    "Football club",
    "Music",
    "Food",

  ];
  let words = [
    "Chelsea",
    "Rock",
    "Pasta"
  ];
  let clue1 = [
    "Premier League",
    "First letter R",
    "Italian food"
  ];
  function lives(){
    lives.innerHTML = `<h2>You have ${startingLives} lives remaining.</h2>`
  }
  lives();
  



