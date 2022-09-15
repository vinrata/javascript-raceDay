let raceNumber = Math.floor(Math.random() * 1000);
let registered = false;
let runnersAge = 18;

if (runnersAge > 18 && registered === true){
  raceNumber = raceNumber + 1000;
}


if (runnersAge > 18 && registered === true){
  console.log("You will race at 9:30 am. Number: " + raceNumber);
} else if (runnersAge > 18 && registered === false){
  console.log('You will race at 11:00 am. Number: ' +raceNumber);
} else if (runnersAge < 18){
  console.log("You will race at 12:30 pm. Number " + raceNumber);
} else {
  console.log("Please go to the registration desk.");
}
