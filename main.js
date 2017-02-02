console.log("treeeeeeee")

// Create a `tree` function that should build a pine tree out of a character in the Chrome dev tools console. 
// It accepts a single object as an argument. The object should have two key/value pairs:
//1. A key that specifies the height of the pine tree (value for the height of the tree should be from user input in a `<input type="text">` field in the DOM)
//2. A key that specifies which character to use to build the pine tree. (The character to use should be from user input in a `<input type="text">` field in the DOM.)

var tree = {
	height: 0,
	char: 0
}

document.getElementById("growButton").addEventListener("click", treeGrow)

function treeGrow(tree) {

	tree.height = document.getElementById("numChoice").value;
	// console.log("numChoice", numChoice)

	tree.char = document.getElementById("charChoice").value;
	// console.log("charChoice", charChoice) 

	for (var i = 1; i < tree.height; i++) {

		var result = " ".repeat(tree.height - i) + tree.char.repeat((i * 2) - 1);
		console.log("result", result);

		};
}
	// treeGrow(); --no longer need this because function is called when referenced upon click of grow button



// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.


document.getElementById("growButton").addEventListener("click", checkInput)

var height = document.getElementById("numChoice")
var character = document.getElementById("charChoice")

function checkInput() {
	// console.log("am I here?")
if (height.value === "" || character.value === "") {
	alert("Please enter a value in both fields!");
	}
};


//this did not work but unsure why
// var inputCheck = document.getElementsByClassName("inputBox");

// function checkInput() {
// 	console.log("does this work?")
// if (inputCheck.value === "") {
// 	alert("Please enter a value in both fields!");
// 	}
// };


