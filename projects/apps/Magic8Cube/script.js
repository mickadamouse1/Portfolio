var shakeBall = document.getElementById("shakeBall");
var probably = document.getElementById("probably");
var highChance = document.getElementById("highChance");
var probablyNot = document.getElementById("probablyNot");
var doubt = document.getElementById("doubt");
var definitely = document.getElementById("definitely");
var impossible = document.getElementById("impossible");

shakeBall.onclick = function(){generate()};

function generate(){
  var randomNum = Math.floor(Math.random() * 6);
  switch (randomNum){
    case 0 :
      probably.style.display = "block";
      shakeBall.style.display = "none";
      setTimeout(function(){
        probably.style.display = "none";
        shakeBall.style.display = "block";
      }, 3000);
      break;
    case 1 :
      highChance.style.display = "block";
      shakeBall.style.display = "none";
      setTimeout(function(){
        highChance.style.display = "none";
        shakeBall.style.display = "block";
      }, 3000);
      break;
    case 2 :
      probablyNot.style.display = "block";
      shakeBall.style.display = "none";
      setTimeout(function(){
        probablyNot.style.display = "none";
        shakeBall.style.display = "block";
      }, 3000);
      break;
    case 3 :
      doubt.style.display = "block";
      shakeBall.style.display = "none";
      setTimeout(function(){
        doubt.style.display = "none";
        shakeBall.style.display = "block";
      }, 3000);
      break;
    case 4 :
      definitely.style.display = "block";
      shakeBall.style.display = "none";
      setTimeout(function(){
        definitely.style.display = "none";
        shakeBall.style.display = "block";
      }, 3000);
      break;
    case 5 :
      impossible.style.display = "block";
      shakeBall.style.display = "none";
      setTimeout(function(){
        impossible.style.display = "none";
        shakeBall.style.display = "block";
      }, 3000);
      break;
  }
}
