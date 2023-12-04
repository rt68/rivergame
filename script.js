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
  fordriver(target) {
    if (Math.random() > target.depth / 10) {
      pElement.innerText = `The river was ${target.depth} meters deep.  You successfully crossed the river.  You win!!`;
      reloadBtn.style.display = "block";
      fordBtn.style.display = "none";
      ferryBtn.style.display = "none";

    } else {
      pElement.innerText = `The river was ${target.depth} meters deep.  You failed to cross the river.  You lose!!  Do you want to restart the game? `
      reloadBtn.style.display = "block";
      fordBtn.style.display = "none";
      ferryBtn.style.display = "none";
    }
  }
  
  ferryriver() {
    this.money -= 5
    if (Math.random() > .1) {
      pElement.innerText = `You successfully crossed the river.  You win!!`;
      reloadBtn.style.display = "block";
      fordBtn.style.display = "none";
      ferryBtn.style.display = "none";
    } else {
      pElement.innerText = `You failed to cross the river.  You lose!!  Do you want to restart the game? `
      reloadBtn.style.display = "block";
      fordBtn.style.display = "none";
      ferryBtn.style.display = "none";
    }
  }
  hunt(target) {
    if (this.ammo > 0) {
      this.ammo--;
    } else {
      pElement.innerText = "Out of ammo!";
      huntBtn.style.display = "none";
      return;
    }
    if (Math.random() < this.accuracy) {
      target.health -= this.attackpoints;
      if (target.health <= 0) {
        target.health = 0;
        this.food += target.foodvalue;
        pElement.innerText = `You successfully hunted ${target.name} and gained ${target.foodvalue} in food! You have ${this.ammo} ammo left.  What do you want to do now?`;
        riverBtn.style.display = "inline";
      } else {
        pElement.innerText = `You hunted ${target.name} and dealt ${this.attackpoints} damage! ${target.name} has ${target.health} health left.  You have ${this.ammo} ammo left. Do you want to keep hunting?`;
        riverBtn.style.display = "inline";
      }

    } else {
      pElement.innerText = `You missed!  You have ${this.ammo} ammo left.  Do you want to keep hunting?`;
      riverBtn.style.display = "inline";
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
class Rabbit {
  constructor() {
    this.name = "Rabbit";
    this.health = 5;
    this.foodvalue = 5;
  }
}
class Bear {
  constructor() {
    this.name = "Bear";
    this.health = 20;
    this.foodvalue = 20;
  }
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
const fordBtn = document.querySelector("#ford");
const ferryBtn = document.querySelector("#ferry");
const pElement = document.querySelector("#message");
const pictureEl = document.querySelector("#picture");
const userformEl = document.querySelector("#userform");
const usernameEl = document.querySelector("#name");
const storeEl = document.querySelector("#store");
const tableEl = document.querySelector("#table");
const healthEl = document.querySelector("#health")
const foodEl = document.querySelector("#food")
const ammoEl = document.querySelector("#ammo")
const moneyEl = document.querySelector("#money")



huntBtn.style.display = "none";
riverBtn.style.display = "none";
reloadBtn.style.display = "none";
userformEl.style.display = "none";
fordBtn.style.display = "none";
ferryBtn.style.display = "none";
let username = usernameEl.value;
let player1 = new Player(username);
const deer1 = new Deer();
const rabbit1 = new Rabbit();
const bear1 = new Bear();
const river1 = new River();
const hunted = [deer1, rabbit1, bear1];

console.log(player1);

healthEl.textContent = player1.health;
ammoEl.textContent = player1.ammo;
moneyEl.textContent = player1.money;
foodEl.textContent = player1.food;

console.log(deer1);
console.log(river1);

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  userformEl.style.display = "block";
  pElement.innerText = "Welcome to your new adventure.";
  pictureEl.src = "wagon.png";
});

huntBtn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * hunted.length);
  // console.log(random);

  player1.hunt(hunted[random]);
  
  // console.log(hunted);
  if (hunted[random].name === "Deer") {
    pictureEl.src = "deer1.png";
  } else if (hunted[random].name === "Rabbit") {
    pictureEl.src = "rabbit1.png";
  } else if (hunted[random].name === "Bear") {
    pictureEl.src = "bear1.png";
  }
  if (hunted[random].health <= 0) {
    if (hunted[random].name === "Deer") {
      hunted.push(new Deer());
    } else if (hunted[random].name === "Rabbit") {
      hunted.push(new Rabbit());
    
    } else if (hunted[random].name === "Bear") {
      hunted.push(new Bear());
    }
    hunted.splice(random, 1) ;
    // console.log(hunted);
  }
});

riverBtn.addEventListener("click", () => {
  pElement.innerText = `The river is ${river1.depth} meters deep.  How do you want to proceed?`;
  pictureEl.src = "riverchoice.jpg";
  huntBtn.style.display = "none";
  riverBtn.style.display = "none";
  fordBtn.style.display = "inline";
  ferryBtn.style.display = "inline";
});
fordBtn.addEventListener("click", () => {
  player1.fordriver(river1);
  pictureEl.src = "river1.png";
})
ferryBtn.addEventListener("click", () => {
  player1.ferryriver();
  pictureEl.src = "ferry1.png";
})
// riverBtn.addEventListener("click", () => {
//   player1.crossriver(river1);
//   pictureEl.src = "river1.png";
// })

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

storeEl.addEventListener("click", () => {
  pictureEl.src = "store1.png";
  pElement.innerText = "Welcome to the store! What would you like to buy?";
  tableEl.style.display = "flex";
  // document.querySelectorAll("button").forEach((button) => {
  //   style.display = "none";
});