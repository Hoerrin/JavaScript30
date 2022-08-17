//Buttons object
//To add new button:
//Add new KEY:VALUE pair, where KEY corrensponds to keyboard button, and VALUE corresponds to sound file name.
//Sound files are stored in src/sounds folder
const buttons = {
  A: "clap",
  S: "hihat",
  D: "kick",
  F: "openhat",
  G: "boom",
  H: "ride",
  J: "snare",
  K: "tom",
  L: "tink",
};

//Get buttons container element
const buttons__container =
  document.getElementsByClassName("buttons__container")[0];

//Add global event listener for keypresses
document.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === 229) return;

  //Check if pressed key has button assigned to it and play its sound
  for (let [letter, name] of Object.entries(buttons)) {
    //Change to upper case to match naming convention
    letter = letter.toUpperCase();
    name = name.toUpperCase();
    if (event.key.toUpperCase() === letter) {
      playSound(letter, name);
    }
  }
});

//When button transition ends remove playing class (eliminates need of timeout in JS file)
document.addEventListener("transitionend", (event) => {
  if (event.propertyName != "transform") return;
  document.getElementById(event.target.id).classList.remove("playing");
});

const playSound = (letter, name) => {
  let buttonDiv = document.getElementById(`button${letter}`);

  buttonDiv.classList.add("playing");
  //Rewind to 0 to be able to play next sound before previous ends
  document.getElementById(name).currentTime = 0;
  document.getElementById(name).play();
};

//Add new button
const addDivElement = (letter, name) => {
  let buttonDiv = document.createElement("div");

  buttonDiv.innerHTML = `<span class="button__keyLetter">${letter}</span><span class="button__soundName">${name}</span>`;
  buttonDiv.classList.add("button");
  buttonDiv.setAttribute("id", `button${letter}`);
  //Add new click event listener for each button. When button is clicked play sound
  buttonDiv.addEventListener("click", () => {
    playSound(letter, name);
  });

  //Append button to buttons container
  buttons__container.append(buttonDiv);
};

//Create new audio element
const addAudioElement = (name) => {
  let audioElement = document.createElement("audio");

  audioElement.setAttribute("id", name);
  audioElement.setAttribute("controls", "");

  audioElement.innerHTML = `<source src="./src/sounds/${name}.wav" type="audio/wav"> Your browser does not support the audio element.`;

  //Append element to document body
  document.body.append(audioElement);
};

//Loop for each element in buttons object
for (let [letter, name] of Object.entries(buttons)) {
  //Change to upper case to match naming convention
  letter = letter.toUpperCase();
  name = name.toUpperCase();

  addAudioElement(name);
  addDivElement(letter, name);
}
