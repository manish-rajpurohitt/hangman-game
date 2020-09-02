let animals = [
  "cow",
  "rabbit",
  "duck",
  "lion",
  "tiger",
  "goat",
  "pig",
  "bee",
  "giraffe",
  "dog"
];
let places = [
  "india",
  "goa",
  "bhopal",
  "rajasthan",
  "africa",
  "china",
  "japan",
  "russia",
  "australia",
  "maharastra"
];
let cricketPlayers = [
  "sachin",
  "dravid",
  "kohli",
  "dhoni",
  "dhawan",
  "chahal",
  "sreeshanth",
  "harbajhan",
  "rohit",
  "rahul"
];
let celebrities = [
  "sushanth",
  "akshay",
  "hrithik",
  "sharukh",
  "varun",
  "salman",
  "deepika",
  "anushka",
  "aishwarya"
];
let wordOptions = ["animals", "places", "cricketers", "celebrities"];
let word;
let score = 5;
let count = 0;

const generateAWord = () => {
  let index = Math.floor(Math.random() * Math.floor(4));
  if (wordOptions[index] === "animals") {
    word = animals[Math.floor(Math.random() * Math.floor(10))];
    document.getElementById(
      "hint"
    ).innerHTML = `<strong>Hint : </strong> It's a Animal name.`;
  } else if (wordOptions[index] === "places") {
    document.getElementById(
      "hint"
    ).innerHTML = `<strong>Hint : </strong> It's a Place name.`;
    word = places[Math.floor(Math.random() * Math.floor(10))];
  } else if (wordOptions[index] === "cricketers") {
    document.getElementById(
      "hint"
    ).innerHTML = `<strong>Hint : </strong> It's a Cricket Player's name.`;
    word = cricketPlayers[Math.floor(Math.random() * Math.floor(10))];
  } else if (wordOptions[index] === "celebrities") {
    document.getElementById(
      "hint"
    ).innerHTML = `<strong>Hint : </strong> It's a Celebrity's name.`;
    word = celebrities[Math.floor(Math.random() * Math.floor(10))];
  }
};

const initGame = () => {
  document.getElementsByClassName("welcome")[0].style.display = "none";
  document.getElementsByClassName("gamearea")[0].style.display = "flex";
};

const setDevice = () => {
  document.getElementsByClassName("gamearea")[0].style.display = "none";
  document.getElementsByClassName("pc-or-mobile")[0].style.display = "flex";
};

const keyboard = () => {
  document.getElementsByClassName("pc-or-mobile")[0].style.display = "none";
  startGameOnPc();
};
const mobile = () => {
  document.getElementsByClassName("pc-or-mobile")[0].style.display = "none";
  addLettersOnDisplay();
  startGameOnMobile();
};

const resetGame = () => {
  let wordContainer = document.getElementsByClassName("word-container")[0];
  for (let i = 0; i < word.length; i++) {
    let el = document.getElementsByClassName(word[i]);
    for (let j = 0; j < el.length; j++) {
      wordContainer.removeChild(el[j]);
    }
  }
};

const gameOver = () => {
  alert(`Game Over! You've lost all your lives! The answer is ${word}`);
  location.reload();
};

const handleLetterKey = (event) => {
  let keyEl = event.target;
  let flg = 0;
  let keyPressed = keyEl.id;
  let allEle = document.getElementsByClassName(keyPressed);
  for (let i = 0; i < allEle.length; i++) {
    if (allEle[i].innerHTML !== keyPressed) {
      allEle[i].innerHTML = keyPressed;
      count++;
      flg = 1;
    } else {
      flg = 0;
    }
  }
  if (flg === 0) {
    score--;
    document.getElementById("score").innerHTML = `Lives : ${score}`;
  }

  if (score === 0) {
    gameOver();
  }
  if (count === word.length) {
    alert("You Won! Next Level.");
    resetGame();
    count = 0;
    score = 5;
    document.getElementById("score").innerHTML = `Lives : ${score}`;
    startGameOnMobile();
  }
};
let handleKeyDown = (event) => {
  let keyPressed = event.which;
  keyPressed = String.fromCharCode(keyPressed).toLowerCase();
  let allEle = document.getElementsByClassName(keyPressed);
  let flg = 0;
  for (let i = 0; i < allEle.length; i++) {
    if (allEle[i].innerHTML !== keyPressed) {
      allEle[i].innerHTML = keyPressed;
      count++;
      flg = 1;
    } else {
      flg = 0;
    }
  }
  if (flg === 0) {
    score--;
    document.getElementById("score").innerHTML = `Lives : ${score}`;
  }

  if (score === 0) {
    gameOver();
  }
  if (count === word.length) {
    alert("You Won! Next Level");
    resetGame();
    count = 0;
    score = 5;
    document.getElementById("score").innerHTML = `Lives : ${score}`;

    startGameOnPc();
  }
};

const addLettersOnDisplay = () => {
  let start = 65;
  let end = 91;
  let lettersContainer = document.getElementsByClassName(
    "letters-container"
  )[0];
  for (start; start < end; start++) {
    let letterEl = document.createElement("div");
    let letter = String.fromCharCode(start).toLowerCase();
    letterEl.setAttribute("id", letter);
    letterEl.classList.add("letter");
    letterEl.classList.add("center");
    letterEl.innerHTML = letter;
    letterEl.addEventListener("click", handleLetterKey);
    lettersContainer.appendChild(letterEl);
  }
};

const startGameOnMobile = () => {
  generateAWord();
  document.getElementsByClassName("pc-or-mobile")[0].style.display = "none";
  document.getElementsByClassName("device-keyboard")[0].style.display = "none";
  document.getElementsByClassName("start")[0].style.display = "flex";
  let wordContainer = document.getElementsByClassName("word-container")[0];
  for (let i = 0; i < word.length; i++) {
    let el = document.createElement("div");
    el.className = word[i];
    el.classList.add("word-letter");
    wordContainer.appendChild(el);
  }
};
const startGameOnPc = () => {
  generateAWord();
  document.addEventListener("keydown", handleKeyDown);
  document.getElementsByClassName("device-mobile")[0].style.display = "none";
  document.getElementsByClassName("pc-or-mobile")[0].style.display = "none";
  document.getElementsByClassName("start")[0].style.display = "flex";
  let wordContainer = document.getElementsByClassName("word-container")[0];
  for (let i = 0; i < word.length; i++) {
    let el = document.createElement("div");
    el.className = word[i];
    el.classList.add("word-letter");
    wordContainer.appendChild(el);
  }
};
