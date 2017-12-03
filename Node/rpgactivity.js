/*Over the course of this activity you are going to be using constructors 
to create simplistic characters for use within a very basic Roleplaying Game (RPG)

* Each character created using your constructor should have the following properties...

  * Name: The character's name --> String

  * Profession: What the character does for a living --> String

  * Gender: The character's gender --> String

  * Age: The character's age --> Integer

  * Strength: Abstraction for how strong the character is --> Integer

  * HitPoints (HP): Abstraction for how much health the character has --> Integer

  * PrintStats: Function which prints all of a character's properties to the screen

  * Once you have created your constructor, create two new characters and print 
  their properties to the screen

  * Fool around and get comfortable with your constructor before moving onto the 
  next parts of the activity

* Now that you feel comfortable with your constructor, it is time to start making 
this character creation system a little more reactive by adding in some more methods...

  * IsAlive: Function which prints whether or not this character is alive by 
  looking into their hitpoints and determining whether they are above or below zero.*/

  function Character (obj) {
    this.name = obj.name; 
    this.profession = obj.profession;  
    this.gender = obj.gender;
    this.age = obj.age;
    this.strength = obj.strength; 
    this.hitPoints = obj.hitPoints;
    this.printStats = function (){
      console.log("stats for:", this);
      console.log(-------------------);
    }
  }

  var wonderWoman = new Character ({
    name: "Wonder Woman", 
    profession: "warrior for the world",
    gender: "female", 
    age: "unknown",
    strength: 1200,
    hitPoints: 50,
  });
wonderWoman.printStats();