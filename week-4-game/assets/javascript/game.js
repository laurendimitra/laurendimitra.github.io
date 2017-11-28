

var targetNumber = Math.floor(Math.random() * 100) + 20;
console.log(targetNumber)
$("#number-to-guess").text(targetNumber);
var numberOptions = [(Math.floor(Math.random() * 12) + 1), (Math.floor(Math.random() * 12) + 1), (Math.floor(Math.random() * 12) + 1), (Math.floor(Math.random() * 12) + 1)];
// console.log(numberOptions);
var counter = 0;
$("#guess").text(counter);
var timesWon = 0;
$("#wins").text(timesWon);
var timesLost = 0;
$("#losses").text(timesLost);




function reset() {
  counter = 0;
  $("#guess").text(counter);
  targetNumber = Math.floor(Math.random() * 100) + 20;
  $("#number-to-guess").text(targetNumber);
  numberOptions = [(Math.floor(Math.random() * 12) + 1), (Math.floor(Math.random() * 12) + 1), (Math.floor(Math.random() * 12) + 1), (Math.floor(Math.random() * 12) + 1)]; 
  console.log(numberOptions);
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);
  crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
};

for (var i = 0; i < numberOptions.length; i++) {
  var imageCrystal = $("<img>");
  imageCrystal.addClass("crystal-image");
  imageCrystal.attr("src", "../week-4-game/assets/images/bluemeth.jpg");
  imageCrystal.attr("data-crystalvalue", numberOptions[i]);

  $("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function () {

  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);

  counter += crystalValue;
  $("#guess").text(counter);

  if (counter === targetNumber) {
    alert('Congratulations. You were able to succesfully weigh, group and deliver the order. You did your job. "I did it for me. I liked it. I was good at it. And I was really - I was alive." - Walter White');
    timesWon++
    $("#wins").text(timesWon);

    reset();
    


  } else if (counter >= targetNumber) {
    alert('You failed to get the order together in time and it lost you a huge client and a couple of men. "Look, let’s start with some tough love. You two suck at peddling meth. Period." - Saul Goodman')
    timesLost++
    $("#losses").text(timesLost);

    reset();
  }
});