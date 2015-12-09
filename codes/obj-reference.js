var drink = "Juice";

function changeDrink(drinkItem, newDrink){
	drinkItem = newDrink;
	return drinkItem;
}

console.log(changeDrink(drink, "gatorade")); //we should expect gatorade
console.log(drink); //what do you expect here? Primitive data types are passed-by-value.


var obj = {
	name: "Ju Park",
	age: 24,
	education: "UCLA"
};

function changeName(person, newName){
	person.name = newName || person.name;
	return person;
}

console.log(changeName(obj, "James Hwang")); //we should expect James Hwang
console.log(obj); //what do you expect here? Pass by reference. Objects are passed-by-reference in JavaScript.

//Pass-by-value vs. Pass-by-reference
//pass-by-value uses a copy of the variable
//pass-by-reference does not make a copy of the variable. It directly accesses the variable.

//Let's go back to our changeDrink function. What's happening is that it's making a copy of our variable (i.e. drink) and uses the value
function changeDrink(drinkItem, newDrink){
	drinkItem = newDrink;
	return drinkItem;
}

//In our changeName function. Since the argument that's passed in is not an object, it does not make a copy of the variable.
//Rather, it refers to the variable.




// var obj = {
// 	name: "Ju Park",
// 	age: 24,
// 	education: "UCLA"
// };

// function changeName(person, newName){
// 	person.name = newName || person.name;
// 	return person;
// }

//is very similar (but not equal) to

var obj2 = {
	name: "Ju Park",
	age: 24,
	education: "UCLA"
};

function changeName2(newName){
	obj2.name = newName;
	return obj2;
}

console.log(changeName2("Chanel Kim"));