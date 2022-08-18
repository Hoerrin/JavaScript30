//Accumulators (prevents counterclockwise animation after full rotation)
let hrAcc = 0;
let minAcc = 0;
let secAcc = 0;

//Indicates if in the last tick accumulator has been changed
let hrChanged = false;
let minChanged = false;
let secChanged = false;

//Get current time
const getDate = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  return [hours, minutes, seconds];
};

const renderClockFace = () => {
  let clock = document.getElementsByClassName("clock")[0];

  //Generate hour markings
  for (let i = 0; i < 12; i++) {
    let mark = document.createElement("div");
    mark.classList.add(`clock__mark`);
    mark.style.transform = `rotate(${(360 / 12) * i}deg) translate(0, 9rem)`;
    clock.append(mark);
  }

  //Generate seconds markings
  for (let i = 0; i < 60; i++) {
    let mark = document.createElement("div");
    mark.classList.add(`clock__mark`);
    mark.classList.add(`clock__mark--sec`);
    mark.style.transform = `rotate(${(360 / 60) * i}deg) translate(0, 9rem)`;
    clock.append(mark);
  }
};

//Calculate hand angle based on provided time
const calculateAngle = (hours, minutes, seconds) => {
  let hrAngle = 0;
  let minAngle = 0;
  let secAngle = 0;

  hrAngle = hrAcc + (360 / 12) * hours;
  minAngle = minAcc + (360 / 60) * minutes;
  secAngle = secAcc + (360 / 60) * seconds;

  return [hrAngle, minAngle, secAngle];
};

const moveHands = () => {
  //Get current time
  let [hours = 0, minutes = 0, seconds = 0] = getDate();

  const hrHand = document.getElementById("hrHand");
  const minHand = document.getElementById("minHand");
  const secHand = document.getElementById("secHand");

  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'

  //Ensures proper angle of clock hand
  minutes = minutes ? minutes : 60;
  seconds = seconds ? seconds : 60;

  //Calculate angle
  let [hrAngle = 0, minAngle = 0, secAngle = 0] = calculateAngle(
    hours,
    minutes,
    seconds
  );

  //Apply rotation to the clock
  hrHand.style.transform = `rotate(${hrAngle - 90}deg)`;
  minHand.style.transform = `rotate(${minAngle - 90}deg)`;
  secHand.style.transform = `rotate(${secAngle - 90}deg)`;

  //If clock hand mad full rotation add 360 to accumulator
  //Also check if in last tick accumulator was changed
  //Prevents animation bug

  if (hrAngle % 360 == 0 && !hrChanged) {
    hrAcc += 360;
    hrChanged = true;
  } else if (hrAngle % 360 != 0) hrChanged = false;

  if (minAngle % 360 == 0 && !minChanged) {
    minAcc += 360;
    minChanged = true;
  } else if (minAngle % 360 != 0) minChanged = false;

  if (secAngle % 360 == 0 && !secChanged) {
    secAcc += 360;
    secChanged = true;
  } else if (secAngle % 360 != 0) secChanged = false;
};

renderClockFace();
setInterval(moveHands, 1000);
