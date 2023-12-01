//Mod 1: The DOM Based Game

class Player {
  constructor(name) {
    this.name = name;
    this.age = Math.floor(Math.random() * 100);;
    this.health = Math.floor(Math.random() * 10) + 10;
    this.attackpoints = Math.floor(Math.random() * 5) + 5;
    this.accuracy = Math.random() * 0.2 + 0.5
    this.ammo = Math.floor(Math.random() * 5) + 5;
    this.money = Math.floor(Math.random() * 10) + 10;
    this.food = Math.floor(Math.random() * 10) + 10;
  }
  crossriver(target) {
    if (Math.random() > target.depth / 10) {
      pElement.innerText = `You successfully crossed the river.  You win!!`;
      reloadBtn.style.display = "block";
      huntBtn.style.display = "none";
      riverBtn.style.display = "none";
      
    } else {
      pElement.innerText = `You failed to cross the river.  You lose!!  Do you want to restart the game? `
      reloadBtn.style.display = "block";
      huntBtn.style.display = "none";
      riverBtn.style.display = "none";
    }
  }

  hunt(target) {
    if (this.ammo > 0) {
      this.ammo--;
    } else {
      console.log("Out of ammo!");
      return;
    }
    if (Math.random() < this.accuracy) {
      target.health -= this.attackpoints;
      if (target.health <= 0) {
        target.health = 0;
        this.food += target.foodvalue;
        pElement.innerText = `You successfully hunted ${target.name} and gained ${target.foodvalue} in food! What do you want to do now?`;
        riverBtn.style.display = "inline";
      } else {
        pElement.innerText = `You hunted ${target.name} and dealt ${this.attackpoints} damage! ${target.name} has ${target.health} health left.  Do you want to keep hunting?`;
        riverBtn.style.display = "none";
      }

    }
  }
}

class Deer {
  constructor() {
    this.name = "Deer";
    this.health = 10;
    // this.attack = Math.floor(Math.random() * 5) + 5;
    this.foodvalue = 10;
  }
  // attack(target) {
  //   target.health -= this.attack;
  //   console.log(`${this.name} attacked ${target.name} and dealt ${this.attack} damage. ${target.name}'s health is now ${target.health}.`);
  //   if (target.health <= 0) {
  //     console.log(`${target.name} has been defeated!`);
  //     return true;
  //   }
  // }
}
class River {
  constructor() {
    this.depth = Math.floor(Math.random() * 10 + 1);
    // this.width = width;
    // this.current = current;
  }
  // attack(target) {
  //   target.health -= this.current;
  //   console.log(`${this.name} attacked ${target.name} and dealt ${this.current} damage. ${target.name}'s health is now ${target.health}.`);
  //   if (target.health <= 0) {
  //     console.log(`${target.name} has been defeated!`);
  //     return true;
  //   }
  // }
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
let username = usernameEl.value;
let player1 = new Player(username);
let deer1 = new Deer();
let river1 = new River();
console.log(deer1);
console.log(river1);
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  userformEl.style.display = "block";
  pElement.innerText = "Welcome to your new adventure.";
  pictureEl.src = "wagon.png";
});
huntBtn.addEventListener("click", () => {
  player1.hunt(deer1);
  pictureEl.src = "deer1.png";

});
riverBtn.addEventListener("click", () => {
  player1.crossriver(river1);
  pictureEl.src = "river1.png";
})

userformEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = usernameEl.value;
  pElement.innerText = `Welcome ${username}! What would you like to do?`;
  userformEl.style.display = "none";
  huntBtn.style.display = "inline";
  riverBtn.style.display = "inline";
  let player1 = new Player(username);
  console.log(player1);

});

reloadBtn.addEventListener("click", () => {
  location.reload();
});