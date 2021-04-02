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

      //condition to display image's array. classList is a selector
        if (animal === "all" | imageElement.classList.contains(animal)) {
          imageElement.style.display = "block";
        } else {
          imageElement.style.display ="none";
        }
      }
    }

/* Loop to select buttons and active CSS button style */
    function updatedClickedButton(selectedButton) {
      for (let i = 0; i < button.length; i++) {
        if (button[i] === selectedButton) {
          //the button selected
          button[i].classList.add("selected");
        } else {
          // the button not clicked
          button[i].classList.remove("selected")
        }
      }
    }

/* Helper text saying something that matches the search */
    function updateHelperText(animal) {
      helperText.innerHTML = "You're looking at the pictures of " + animal;
    }

/* Loop through each button in the button array. Add the listener for the loop that looks for a click event*/
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function(event) {
    event.preventDefault();
    let animal = button[i].dataset.animal;
    console.log(animal);

   //You must call other function in the loop to be actioned.
    updateImageDisplay(animal);
    updatedClickedButton(button[i]);
    updateHelperText(animal);
  });
};

/* Search event to display what we look for */
  searchBox.addEventListener("keydown", function(event) {
    let mySearchTerm = this.value;

    for (let i = 0; i < images.length; i++) {
      let imageElement = images[i];

      if (mySearchTerm === "all" || imageElement.getAttribute("class").includes(mySearchTerm)) {
        //searching
        imageElement.style.display = "block";
      } else {
        imageElement.style.display = "none";
      }
    }
  });
