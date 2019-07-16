var nextChar = document.getElementById("nextChar");
var previousChar = document.getElementById("previousChar");
var characterPanel = document.getElementById("characterPanel");
var characterList = ["naked", "peasant1", "peasant2", "knight"];
var characterImg = ["characters/TEMPLATE.png", "characters/Peasant1.png", "characters/Peasant2.png", "characters/Warrior.png"];
var characterIndex = characterList.indexOf("naked");
var character = characterList[0];
var charImg = characterImg[0];

function nextCharacter() {
  if (characterIndex >= 0 && characterIndex < characterList.length - 1) {
    var nextChar = characterList[characterIndex + 1];
    var nextImg = characterImg[characterIndex + 1];
    characterIndex = characterList.indexOf(nextChar);
  } else {
    characterIndex = characterList.indexOf("naked");
    nextChar = characterList[characterIndex];
    nextImg = characterImg[characterIndex];
  }
  character = nextChar;
  charImg = nextImg;
  characterPanel.style.backgroundImage = "url("+ charImg +")";
  console.log(character);
  console.log(characterIndex);
  console.log(charImg);
}

function previousCharacter() {
  if (characterIndex == 0) {
    var preChar = characterList[3];
    var preImg = characterImg[3];
    characterIndex = characterList.indexOf(preChar);
  } else if (characterIndex >= 0 && characterIndex < characterList.length) {
    var preChar = characterList[characterIndex - 1];
    var preImg = characterImg[characterIndex - 1];
    characterIndex = characterList.indexOf(preChar);
  } else {
    characterIndex = characterList.indexOf("naked");
    preChar = characterList[characterIndex];
    preImg = characterImg[characterIndex];
  }
  character = preChar;
  charImg = preImg;
  characterPanel.style.backgroundImage = "url("+ charImg +")";
  console.log(character);
  console.log(characterIndex);
  console.log(charImg);
}

nextChar.onclick = function() {nextCharacter();};
previousChar.onclick = function() {previousCharacter();};
