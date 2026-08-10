console.log("JavaScript connected!");
let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ["a", "b", "c", "d"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelUp();
  }
});
function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 500);
}
function levelUp() {
  userSeq = [];
  level++;
  h2.innerHTML = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * 3);
  let randnum = btns[randIdx];
  let randbtn = document.querySelector(`.${randnum}`);
  gameSeq.push(randnum);
  // console.log(randbtn)
  console.log(gameSeq);
  btnFlash(randbtn);
}
function checkAns(idx) {
  // console.log("curr level:",level)
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over ! Your score was <b>${level}</b> <br>Press any key to start.`;
    // document.querySelector("body").style.color="red";
    // setTimeout(function(){
    //     document.querySelector("body").style.color="";
    // },150)
    gameOver();
    reset();
  }
}
function btnPress() {
  let btn = this;
  btnFlash(btn);
  userBtn = btn.getAttribute("id");
  userSeq.push(userBtn);
  checkAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
function reset() {
  gameSeq = [];
  userSeq = [];
  started = false;
  level = 0;
}
function gameOver() {
    let body = document.querySelector("body");
    body.classList.add("game-over");
    setTimeout(function () {
        body.classList.remove("game-over");
    }, 500);
}