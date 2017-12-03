function DigitalPal(name, hungry, sleepy, bored, age, outside) {
  this.name = name;
  this.hungry = hungry;
  this.sleepy = sleepy;
  this.bored = bored;
  this.age = age;
  this.outside = outside;

  this.feed = function(){
    if(this.hungry){
      console.log("That was yummy!");
      this.hungry=false;
      this.sleepy=true;
    }else{
      console.log("No thanks! I'm full");
    }

  }
  this.sleep = function(){
    if (this.sleepy){
      console.log("Zzzzzzzz");
      this.sleepy = false;
      this.bored=true;
      this.increaseAge();
    }else{
      console.log("No way! I'm not tired.");
    }

  }

  this.play = function() {
    if (this.bored){
      console.log("Yay! Let's play!");
      this.bored=false;
      this.hungry=true;
    }else {
      console.log("Not right now. Later?");
    }

  }

  this.increaseAge = function(){
    if(this.sleep){
      this.age++;
      console.log("Happy Birthday to me! I am" + this.age + "old!")
    }

  }
}

var dog = new DigitalPal("spike", false, false, true, 0, false);
var dog2 = new DigitalPal("tiny", false, true, true, 0, true);

dog.feed();
dog.sleep();
dog.play();

