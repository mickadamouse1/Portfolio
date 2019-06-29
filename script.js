var navLinks = document.getElementsByClassName("navLink");
var icons = document.getElementsByClassName("navIconItem");
var navLinkVisability = false;
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
var timeout = true;
var dropDownStatus = false;


// Changes class display by inputting the parameters (element, value)
function setVisability(element, status) {
  for (var i = 0; i < element.length; i++){
    element[i].style.display = status;
  };
}

hamburgerIcon.onclick = function(){
  if (navLinkVisability == false){
    setVisability(navLinks, "block");
    setVisability(icons, "block");
    navLinkVisability = true;
    dropDownStatus = true;
    navFlexContainer.style.padding = "10px 35px 0 35px";
  } else {
    setVisability(navLinks, "none");
    setVisability(icons, "none");
    navFlexContainer.style.padding = "10px 0 0 0";
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
