// Make a dogs object with three keys...
var dog = {
	raining: true,
	noise: "woof", 
	makeNoise: function() {
		if (this.raining) {
			console.log(this.noise);
		}
	}
}

var cat = {
	raining: false, 
	noise: "meow",
	makeNoise: function(){
		if (this.raining) {
			console.log(this.noise);
		}
	}
}

cat.raining = true; 
cat.makeNoise();
dog.makeNoise();

function Animal(raining, noise) {
	this.raining = raining; 
	this.noise = noise; 
	this.makeNoise= function() {
		if (this.raining) {
			console.log(this.noise);
		}
	}
}

var dogs = new Animal(true, "woof"); 
var cats = new Animal(false, "meow");

dogs.makeNoise();
cats.makeNoise();

// First key called "raining" with a value of true

// Second key called "noise" with a value of "Woof!"

// Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining dogs

// Make a cats object with three keys...

// First key called "raining" with a value of false

// Second key called "noise" with a value of "Meow!"

// Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining cats

// Make the dog bark

// Make the cat meow
