//initial function to start countdown
function betterCountdown() {
  //variable to start the variable time at 10
  var currTime = 10;

  //initial for, if, else if and else to display condition
  for (var i = 1; i <= 11; i++) {
    //displays blastoff after timer ends
    if (i == 11) {
      setTimeout(function () {
        //code goes here for timer
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!!";
      }, 1000 * i);
    }
    //displays warning less than half way to launch when time is less than 6
    else if (i > 5) {
      setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML =
          "Warning Less than ½ way to launch, time left = " + currTime;
        currTime = currTime - 1;
      }, 1000 * i);
    }
    //displays "time left is" then the time it is on
    else {
      setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML =
          "the time left is " + currTime;
        currTime = currTime - 1;
      }, 1000 * i);
    }
  }
}
