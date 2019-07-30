var navLinks = document.getElementsByClassName("navLink");
var navLinkList = document.getElementById("navLinkList");
var navIcons = document.getElementById("navLinkList").getElementsByClassName("navIconItem");
var btnStart = document.getElementById("btnGetStarted");
var landingPage = document.getElementById("landingPage");
var nav = document.getElementById("nav");
var navLinkVisability = false;
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
var timeout = true;
var dropDownStatus = false;


// *CLASS SELECTION FUNCTION* Change display value by inputting the parameters (element, value)
function setClassVisability(element, value) {
  for (var i = 0; i < element.length; i++){
    element[i].style.display = value;
  };
}

// *ID SELECTION FUNCTION* Change display value by inputting the parameters (element, value)
function setIdVisability(variableName, value) {
  variableName.style.display = value;
}

// *ID CLASS SELECTION FUNCTION* Change display value of all classes within an ID by using parameters (element, value)
function setAllClassWithinIdVisability(variableName, value){
  for (i = 0; i < variableName.length; i++) {                         // Loops through to select all elements within this ID
    variableName[i].style.display = value;
  };
}

hamburgerIcon.onclick = function(){
  if (dropDownStatus == false){
    setClassVisability(navLinks, "block");
    setAllClassWithinIdVisability(navIcons, "inline-block");                 // set the navigation link visability to block using the class selection function (see above)
    setIdVisability(navLinkList, "block");
    navLinkVisability = true;
    dropDownStatus = true;
    navFlexContainer.style.padding = "10px 35px 0 35px";
  } else {
    setClassVisability(navLinks, "none");
    setClassVisability(navIcons, "none");
    navFlexContainer.style.padding = "10px 0 0 0";
    navLinkVisability = false;
    dropDownStatus = false;
  }
}

window.addEventListener('resize', function() {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth >= 990 && timeout == true) {
    setClassVisability(navLinks, "block");
    setClassVisability(navIcons, "block");
    setIdVisability(navLinkList, "inline-flex");
    navLinkVisability = true;
    timeout = false;
    setTimeout(function(){
      timeout = true;
    }, 0);
  } else if (viewportWidth < 990 && timeout == true && dropDownStatus == false) {
    setClassVisability(navIcons, "none");
    setIdVisability(navLinkList, "none");
    navLinkVisability = false;
    timeout = false;
    setTimeout(function(){
      timeout = true;
    }, 0);
  } else if (viewportWidth < 990 && timeout == true && dropDownStatus == true) {
    setClassVisability(navIcons, "inline-block");
    setIdVisability(navLinkList, "block");
  }
}, false);

btnStart.onclick = function() {
  document.body.style.overflow = "visible";
  landingPage.classList.toggle("fade");
  setTimeout(function(){
    landingPage.style.display = "none";
  }, 200);
  document.getElementById("aboutMeSection").classList.toggle("fadein");
  nav.classList.toggle("fadein");
};

window.onbeforeunload = function() {
  window.scrollTo(0,0);
}
