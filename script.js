var navLinks = document.getElementsByClassName("navLink");
var navLinkVisability = false;
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
var timeout = true;
var dropDownStatus = false;

function setVisability(element, status) {
  for (var i = 0; i < element.length; i++){
    element[i].style.display = status;
  };
}

hamburgerIcon.onclick = function(){
  if (navLinkVisability == false){
    setVisability(navLinks, "block");
    navLinkVisability = true;
    dropDownStatus = true;
  } else {
    setVisability(navLinks, "none")
    navLinkVisability = false;
    dropDownStatus = false;
  }
}

window.addEventListener('resize', function() {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth >= 990 && timeout == true) {
    setVisability(navLinks, "block");
    navLinkVisability = true;
    console.log("Large Window");
    timeout = false;
    setTimeout(function(){
      timeout = true;
    }, 0);
  } else if (viewportWidth < 990 && timeout == true && dropDownStatus == false) {
    setVisability(navLinks, "none");
    navLinkVisability = false;
    console.log("Small Window");
    timeout = false;
    setTimeout(function(){
      timeout = true;
    }, 0);
  } 
}, false);
