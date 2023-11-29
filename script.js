//Mod 1: The DOM Based Game

class Player {
    constructor(name, age, gender, health, attack) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.health = health;
      this.attack = attack;
  
  
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
  class Hunted {
    constructor(name, age, gender, health, attack) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.health = health;
      this.attack = attack;
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