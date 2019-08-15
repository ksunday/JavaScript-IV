/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
// function GameObject(attributes) {
//   this.createdAt = attributes.createdAt;
//   this.name = attributes.name;
// }
class GameObject {
  constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
  }
  destroy = function() {
    return `${this.name} was removed from the game.`;
  };
  dimensions = function(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  };
}
// GameObject.prototype.destroy = function() {
//   return `${this.name} was removed from the game.`;
// };

// GameObject.prototype.dimensions = function(length, width, height) {
//   this.length = length;
//   this.width = width;
//   this.height = height;
// };
class CharacterStats extends GameObject {
  constructor(stats) {
    super(stats);
    this.healthPoints = stats.healthPoints;
  }
}
// function CharacterStats(stats) {
//   GameObject.call(this, stats); // derives game object as a parent and binds this keyword to parent
//   this.healthPoints = stats.healthPoints;
// }

// CharacterStats.prototype = Object.create(GameObject.prototype);

takeDamage = function() {
  return `${this.name} take damage.`;
};
// CharacterStats.prototype.takeDamage = function() {
//   return `${this.name} took damage.`;
// };

class Humanoid extends GameObject {
  constructor(human) {
    super(human);
    this.team = human.team;
    this.weapons = human.weapons;
    this.language = human.language;
  }
  greet = function() {
    return `${this.name} offers a greeting in ${this.language}.`;
  };
}
// function Humanoid(human) {
//   CharacterStats.call(this, human);
//   this.team = human.team;
//   this.weapons = human.weapons;
//   this.language = human.language;
// }

// Humanoid.prototype = Object.create(CharacterStats.prototype); // adds gameObjects prototype to Character stats prototype and takes care of inheriting
//destroy() from GameObject through CharacterStats and take damage

// Humanoid.prototype.greet = function() {
//   return `${this.name} offers a greeting in ${this.language}.`;
// };

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
