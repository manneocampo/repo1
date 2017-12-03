function Character(characterObj) {
  this.name = characterObj.name;
  this.profession = characterObj.profession;
  this.gender = characterObj.gender;
  this.age = characterObj.age;
  this.strength = characterObj.strength;
  this.hp = characterObj.hp;

  this.isAlive = function() {
    return this.hp > 0;
  }

  this.getLivingStatus = function() {
    if (this.isAlive()) {
      console.log(`${this.name} is alive`);
    } else {
      console.log(`${this.name} be dead`);
    }
  }

  this.attack = function(character) {
    if (character.isAlive()) {
      character.hp -= this.strength;
      if (!character.isAlive()) {
        this.levelUp();
      }
    }

  }

  this.levelUp = function() {
    this.hp += 25;
    this.strength += 5;
    this.age ++;
  }

  this.printStats = function() {
    console.log('character name: ', this.name);
    console.log('character profession: ', this.profession);
    console.log('character gender: ', this.gender);
    console.log('character age:', this.age);
    console.log('character strength:', this.strength);
    console.log('character hp:', this.hp);
    console.log('-----------------')
  }
}

var batman = new Character({
  name: 'batman',
  profession: 'vigilantye',
  gender: 'male',
  age: 38,
  strength: 12,
  hp: 30,
});

var joker = new Character({
  name: 'joker',
  profession: 'mischeif archetect',
  gender: 'male',
  age: 32,
  strength: 15,
  hp: 22,
})

batman.getLivingStatus();
joker.getLivingStatus();

joker.printStats();
joker.attack(batman);
joker.attack(batman);
joker.printStats();