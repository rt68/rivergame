//Mod 1: The DOM Based Game

class Player {
  constructor(name) {
    this.name = name;
    this.age = Math.floor(Math.random() * 100);;
    this.health = Math.floor(Math.random() * 10) + 10;
    this.attackpoints = Math.floor(Math.random() * 5) + 5;
    this.accuracy = Math.random() * 0.2 + 0.5

  }
  hunt(target) {
    if (Math.random() < this.accuracy) {
    target.health -= this.attackpoints;
    }
    console.log(`${this.name} hunted ${target.name} and dealt ${this.attack} damage. ${target.name}'s health is now ${target.health}.`);
    if (target.health <= 0) {
      console.log(`${target.name} has been killed!`);
      return true;
    }
  }
  
}

class Deer {
  constructor() {

    this.health = Math.floor(Math.random() * 10) + 10;
    this.attack = Math.floor(Math.random() * 5) + 5;
  }
  attack(target) {
    target.health -= this.attack;
    console.log(`${this.name} attacked ${target.name} and dealt ${this.attack} damage. ${target.name}'s health is now ${target.health}.`);
    if (target.health <= 0) {
      console.log(`${target.name} has been defeated!`);
      return true;
    }
  }
}
class River {
  constructor(depth, width, current) {
    this.depth = depth;
    this.width = width;
    this.current = current;
  }
  attack(target) {
    target.health -= this.current;
    console.log(`${this.name} attacked ${target.name} and dealt ${this.current} damage. ${target.name}'s health is now ${target.health}.`);
    if (target.health <= 0) {
      console.log(`${target.name} has been defeated!`);
      return true;
    }
  }
}

const startBtn = document.querySelector("#start");
const huntBtn = document.querySelector("#hunt");
const riverBtn = document.querySelector("#crossriver");
const reloadBtn = document.querySelector("#reload");
const pElement = document.querySelector("#message");
const pictureEl = document.querySelector("#picture");
const userformEl = document.querySelector("#userform");
const usernameEl = document.querySelector("#name");


huntBtn.style.display = "none";
riverBtn.style.display = "none";
reloadBtn.style.display = "none";
userformEl.style.display = "none";

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  userformEl.style.display = "block";
  pElement.innerText = "Welcome to your new adventure.";
  pictureEl.src = "wagonriver1.jpg";
});
huntBtn.addEventListener("click", () => {
  pElement.innerText = "You chose to hunt.  ";
  huntBtn.style.display = "none";
  riverBtn.style.display = "none";

});
riverBtn.addEventListener("click", () => {
  pElement.innerText = "You chose to cross the river.  The river is depth, width, current.  Do you want to ...?";
})

userformEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = usernameEl.value;
  pElement.innerText = `Welcome ${username}! What would you like to do?`;
  userformEl.style.display = "none";
  huntBtn.style.display = "block";
  riverBtn.style.display = "block";
  const player1 = new Player(username);
  console.log(player1);

});