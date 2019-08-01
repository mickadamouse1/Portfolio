var isChrome = (navigator.userAgent.toString().toLowerCase().indexOf("chrome") != -1);  // I dont have a clue how this actually works...
var isFirefox = (navigator.userAgent.toString().toLowerCase().indexOf("firefox") != -1); // Its been two days... I still dont have a clue...

var landingPage = document.getElementById("landingPage");
var aboutMeSection = document.getElementById("aboutMeSection");
var skillsSection = document.getElementById("skillsSection");
var projectsSection = document.getElementById("projectsSection");

var btnHome = document.getElementById("btnHome");
var btnAbout = document.getElementById("btnAbout");
var btnSkills = document.getElementById("btnSkills");
var btnProjects = document.getElementById("btnProjects");
var btnContact = document.getElementById("btnContact");

var navLinks = document.getElementsByClassName("navLink");
var navLinkList = document.getElementById("navLinkList");
var navIcons = document.getElementById("navLinkList").getElementsByClassName("navIconItem");
var btnStart = document.getElementById("btnGetStarted");
var nav = document.getElementById("nav");
var navLinkVisability = false;
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
var timeout = true;
var dropDownStatus = false;

window.onbeforeunload = function() {
  window.scrollTo(0,0);
}

window.onload = function() {
    setTimeout(function(){
      window.scrollTo(0,0);
    }, 0);
}

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

function showDropdown() {
  setClassVisability(navLinks, "block");
  setAllClassWithinIdVisability(navIcons, "inline-block");                 // set the navigation link visability to block using the class selection function (see above)
  setIdVisability(navLinkList, "block");
  navLinkVisability = true;
  dropDownStatus = true;
  nav.classList.toggle("dropdownStyle");
  brand.classList.toggle("dropdownStyle");
}

function hideDropdown(){
  setClassVisability(navLinks, "none");
  setClassVisability(navIcons, "none");
  setIdVisability(navLinkList, "none");
  navLinkVisability = false;
  dropDownStatus = false;
  nav.classList.toggle("dropdownStyle");
  brand.classList.toggle("dropdownStyle");
}

function scrollToSection(section) {
  section.scrollIntoView(true);
  if (viewportWidth < 990) {
    hideDropdown();
  }
}

hamburgerIcon.onclick = function(){
  if (dropDownStatus == false){
    showDropdown();
  } else {
    hideDropdown();
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
  aboutMeSection.classList.toggle("fade");
  nav.style.display = "flex";
  nav.classList.toggle("fade");
  landingPage.classList.toggle("fade");
  setTimeout(function(){
    landingPage.style.display = "none";
  }, 200);
  if (viewportWidth >= 990) {
    setClassVisability(navLinks, "block");
    setClassVisability(navIcons, "block");
    setIdVisability(navLinkList, "inline-flex");
  }
}

btnHome.onclick = function() {
  document.body.style.overflow = "hidden";
  window.scrollTo(0,0);
  if (viewportWidth <= 990) {
    hideDropdown();
  }
  landingPage.style.display = "flex";
  landingPage.classList.toggle("fade");
  aboutMeSection.classList.toggle("fade");
  nav.classList.toggle("fade");
  nav.style.display = "none";
  setTimeout(function(){
  nav.style.display = "flex";
  }, 10);
}

btnAbout.onclick = function(){scrollToSection(aboutMeSection)}
btnSkills.onclick = function(){scrollToSection(skillsSection)}
btnProjects.onclick = function(){scrollToSection(projectsSection)}
btnContact.onclick = function(){scrollToSection(contactSection)}
