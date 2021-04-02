//task DOM practical 31/03/2021

//Added variable for buttons
    const button = document.querySelectorAll(".buttonFilter");
    const images = document.querySelectorAll(".imageFilter");
    const helperText = document.querySelector("#helper-text");
    const searchBox = document.querySelector("#search");

    console.log(button);


/* Loop through each item in the images array to change containers to display:block or dicplay:none
This will be built-in into a function to go through every image  */
    function updateImageDisplay(animal) {
      for (let i = 0; i < images.length; i++) {
        let imageElement = images[i];

//condition to display image's array
        if (animal === "all" | imageElement.classList.contains(animal)) {
          imageElement.style.display = "block";
        } else {
          imageElement.style.display ="none";
        }
      }
    }


/* Loop through each button in the button array. Add the listener for the loop that looks for a click event*/
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function(event) {
    event.preventDefault();
    let animal = button[i].dataset.animal;
    console.log(animal);

// call other function in the loop to be actioned.
    updateImageDisplay(animal);
    updateClickButton(button[i]);
    updateHelperText(animal);
  });
};
