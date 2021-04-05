//variables.html

console.log("Hi there!");
//alert("You will not see a magic if you have turned off JavaScript");

//task 2
let numberOfKittens = 5;
let numberOfPuppies = 8;
let totalpupils = numberOfKittens + numberOfPuppies;

console.log(totalpupils);
console.log("Anne has got " + totalpupils + " pupils");
console.log(`${numberOfKittens} kittens belong to Anne\'s daughter and ${numberOfPuppies} puppies belong Anne\'s son.`)

//task 3



//task 4
function names(firstName, lastName) {
  var fullName = `Hello ${firstName} ${lastName}`
  return fullName
}

let sayFullName = names("Anne", "Cat");
console.log(sayFullName);

console.log(names("Alice", "Row"))

//task5
let currentTemperature = 30;
function cold(temperature) {
  if (temperature >= 30 && temperature < 50 ){
    console.log("Put on coat")
  } else if (temperature >= 0 && temperature < 30){
    console.log("Put on a coat and a hat")
  } else if (temperature < 0) {
    console.log("Stay inside");
  } else {
    console.log("Just pants and vest are fine");
  }
}
cold(currentTemperature); //Put on coat
cold(60); //Just pants and vest
cold(-7); //Stay inside
cold(25); //Put on a coat and a hat

//Task6
function calculator(number1, number2, operator) {
  switch(operator) {
    case "+":
    var result = number1 + number2;
    console.log(number1, operator, number2, "=", result);
    break;
    case "-":
    var result = number1 - number2;
    console.log(number1, operator, number2, "=", result);
    break;
    case "*":
    var result = number1 * number2;
    console.log(number1, operator, number2, "=", result);
    break;
    case "/":
    var result = number1 / number2;
    console.log(number1, operator, number2, "=", result);
    break;
    case "%":
    var result = number1 % number2;
    console.log(number1, operator, number2, "=", result);
    break;
  }
}
calculator(2, 2, "+");
calculator(8, 10, "-");
calculator(6, 5, "*");
calculator(6, 5, "%");


//Task7
for (var i = 1; i <= 12; i++) {
  console.log(`${i} x 7 = ${i * 7}`)
}

for (var j = 1; j <= 12; j++) {
  for (var k = 1; k <=12; k++) {
    var result = j * k;
    console.log(`${j} multiply by ${k} = ${result}`)
  }
}

//Task8
let myFavouriteFoods = [
  "Pizza",
  "Lasagne",
  "Dumplings",
  "Lettuce",
  "ice cream"
]
console.log("This is my favourite food no 1: " + myFavouriteFoods[2]);
console.log("This is my favourite food no 3: " + myFavouriteFoods[3]);

for (var i = 0; i <myFavouriteFoods.length; i++) {
  console.log(myFavouriteFoods[i]);
}

//Task9
let recipe = {
  recipeTitle: "Chocolate cake",
  servings: 4,
  ingredients: ["350g of flour", " 120g of sugar", " 120ml of oil", " 4tbsp of cocoa powder", " 150ml of milk", " 2 tsp of baking powder"],
  directions: ["1. mixed all dry ingredients", " 2. mixed all wet ingredients", " 3. add wet to dry and stir", " 4. warm up oven to 180deg.", " 5. line a parchment in the baking trey", " 6. pour the dough into the baking trey", " 7. put the trey into the warm oven and leave it for an hour", " 8. take it out and cool down on the rack and then, serve."]

}//this is an object
document.getElementById("p1").innerHTML = `<b>List of properties</b> <br /> ${recipe.recipeTitle}<br />Servings: ${recipe.servings}<br />Ingredients: ${recipe.ingredients}<br />`;
//this is element to pass object to html by using ID

for (i = 0; i < recipe.directions.length; i++) {
  directions = recipe.directions[i];
  console.log(directions);
}//this is a loop to list directions in console.

for (i=0; i < recipe.ingredients.length; i++) {
  console.log(`${i + 1}. ${recipe.ingredients[i]}`);
}//this is a loop to list ingredients in console.

//To pass a loop outcome of arrays, object being declared as STRING you need to declare a variable of element you'll use.
//Then you create a loop and in it declare an access to an array/object.
//Next you call the declared element + .innerHTML, to which you'll append directions array/object every time through the loop.
//If you don't append you'll replace entire .innerHTML, thus you'll see the last value of an array/object.

//The last is to add title you need to call declared variable element/method +innerText/Content/html.
  let direction = document.getElementById("p2");
  direction.innerHTML = "<b>A loop to list all the directions:</b><br>"; //alternative: direction.innerContent = "A loop to list all the directions\n" - with a new line
for (i = 0; i < recipe.directions.length; i++) {
  directions = recipe.directions[i];
  direction.innerHTML += directions + "<br>";
}

  let ingredient = document.getElementById("p3");
  ingredient.innerHTML = "<b>A loop to list all the ingredients:</b><br>";
for (i = 0; i < recipe.ingredients.length; i++) {
  ingredients = recipe.ingredients[i];
  ingredient.innerHTML += "- " + ingredients + "<br>";
}
