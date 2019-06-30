var navLinks = document.getElementsByClassName("navLink");
var navLinkList = document.getElementById("navLinkList");
var navIcons = document.getElementById("navLinkList").getElementsByClassName("navIconItem")[0];
var navLinkVisability = false;
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
var timeout = true;
var dropDownStatus = false;


// Changes class display by inputting the parameters (element, value)
function setVisability(element, value) {
  for (var i = 0; i < element.length; i++){
    element[i].style.display = value;
  };
}

function setIdVisability(variableName, value) {
  variableName.style.display = value;
}

hamburgerIcon.onclick = function(){
  if (navLinkVisability == false){
    setVisability(navLinks, "block");
    setVisability(navIcons, "inline-block");
    navLinkVisability = true;
    dropDownStatus = true;
    navFlexContainer.style.padding = "10px 35px 0 35px";
  } else {
    setVisability(navLinks, "none");
    setVisability(navIcons, "none");
    navFlexContainer.style.padding = "10px 0 0 0";
    navLinkVisability = false;
    dropDownStatus = false;
  }
}

window.addEventListener('resize', function() {
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth >= 990 && timeout == true) {
    console.log(dropDownStatus);
    setVisability(navLinks, "block");
    setVisability(navIcons, "block");
    navLinkVisability = true;
    console.log("Large Window");
    timeout = false;
    setTimeout(function(){
      timeout = true;
    }, 0);
  } else if (viewportWidth < 990 && timeout == true && dropDownStatus == false) {
    console.log(dropDownStatus);
    if (dropDownStatus === false) {
      setVisability(navIcons, "none");
      setIdVisability(navLinkList, "none");
    } else {
      setVisability(navIcons, "inline-block");
      setIdVisability(navLinkList, "block");
    };
    navLinkVisability = false;
    console.log("Small Window");
    timeout = false;
    setTimeout(function(){
      timeout = true;
    }, 0);
  }
}, false);
