const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

function getRandomNumber(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min+1))+min;  //The maximum is inclusive and the minimum is inclusive
}

function getRandomKey() {
  return keys[getRandomNumber(0,keys.length-1)];
}

function targetRandomKey() {
  const key = document.getElementById(getRandomKey());
  key.classList.add("selected");
}

document.addEventListener("keyup", event => {
  const keyPressed = String.fromCharCode(event.keyCode);  //key
  const keyElement = document.getElementById(keyPressed);
  const highLightedKey = document.querySelector(".selected");
  keyElement.classList.add("hit");
  keyElement.addEventListener('animationend', () => {
    keyElement.classList.remove("hit")
  })
  if (keyPressed === highLightedKey.innerHTML){
    highLightedKey.classList.remove("selected")
    targetRandomKey();
  }
  } 
)

targetRandomKey()