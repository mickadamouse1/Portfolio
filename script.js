var navLinks = document.getElementsByClassName("navLink");
var navLinkVisability = false;


hamburgerIcon.onclick = function(){
  if (navLinkVisability == false){
    for (var i = 0; i < navLinks.length; i++){
      navLinks[i].style.display = "block";
    };
    navLinkVisability = true;
  } else {
    for (var i = 0; i < navLinks.length; i++){
      navLinks[i].style.display = "none";
    };
    navLinkVisability = false;
  }
}
