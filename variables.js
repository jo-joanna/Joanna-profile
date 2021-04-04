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
