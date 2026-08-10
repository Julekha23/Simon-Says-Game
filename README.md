# 🎮 Simon Says Game

A colorful and interactive **Simon Says memory game** built using **HTML, CSS, and JavaScript**.

## 🕹️ How to Play

1. Press any key to start the game.
2. Simon will flash one of the colored buttons.
3. Click the buttons in the same order as Simon.
4. Each successful round adds another button to the sequence.
5. If you click the wrong button, the game ends.
6. Try to achieve the highest level possible! 🚀

## ✨ Features

* 🎨 Colorful gradient UI
* 🔴🟡🟢🔵 Four interactive buttons
* 💡 Button flash animations
* 📈 Increasing difficulty with each level
* 🧠 Memory-based gameplay
* 💥 Game-over animation
* 📱 Responsive design

## 🛠️ Technologies Used

* **HTML5** — Structure of the game
* **CSS3** — Styling, gradients, animations, and responsive design
* **JavaScript** — Game logic, random sequences, user input, and levels

## 📂 Project Structure

```text
Simon-Says/
│
├── index.html
├── index.css
├── index.js
└── README.md
```

## 🚀 How to Run

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in your browser.
4. Press any key to start playing.

## 🧩 Game Logic

The game maintains two sequences:

```js
let gameSeq = [];
let userSeq = [];
```

* `gameSeq` stores Simon's generated sequence.
* `userSeq` stores the buttons clicked by the player.

A new random button is added after every successful level.

## 🎯 Goal

Remember the sequence and reproduce it correctly for as many levels as possible.

**Can you beat your highest score? 🏆**

## 👨‍💻 Author
Mosammat Julekha Molla
---

⭐ If you enjoyed the project, consider giving it a star!
