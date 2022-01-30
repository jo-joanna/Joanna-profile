
// 1. project to find your year birth

function birthYear(number) {

      var number = document.getElementById('number').value

      if(number <= 0 || number == "") {

        window.alert("Insert a natural number");
        return;
      }

      var birthYear = new Date().getFullYear() - number;
      document.getElementById('year').innerHTML = "This is a year, when you were born " + birthYear;

};

document.getElementById('button').onclick = function() { birthYear(); };
