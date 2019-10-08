window.onload = function() {

  // Ex

  var isChrome = (navigator.userAgent.toString().toLowerCase().indexOf("chrome") != -1);  // I dont have a clue how this actually works...
  var isFirefox = (navigator.userAgent.toString().toLowerCase().indexOf("firefox") != -1); // Its been two days... I still dont have a clue...

  ////////////////////////////////////////////////////////////////////////////////

  var landingPage = document.getElementById("landingPage");
  var aboutMeSection = document.getElementById("aboutMeSection");
  var skillsSection = document.getElementById("skillsSection");
  var projectsSection = document.getElementById("projectsSection");

  ////////////////////////////////////////////////////////////////////////////////

  var btnHome = document.getElementById("btnHome");
  var btnAbout = document.getElementById("btnAbout");
  var btnSkills = document.getElementById("btnSkills");
  var btnProjects = document.getElementById("btnProjects");
  var btnContact = document.getElementById("btnContact");
  var btnAccount = document.getElementById("navAccountIconLink");
  var btnBlog = document.getElementById("navBlogIconLink");
  var btnStart = document.getElementById("btnGetStarted");
  var btnDropdown = document.getElementById("hamburger");

  ////////////////////////////////////////////////////////////////////////////////

  var navLinks = document.getElementsByClassName("navLink");
  var navLinkList = document.getElementById("navLinkList");
  var navIcons = document.getElementById("navLinkList").getElementsByClassName("navIconItem");
  var nav = document.getElementById("nav");
  var navLinkVisability = false;
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  var timeout = true;
  var dropDownStatus = false;

  var hamburgerIcon = document.getElementById("hamburgerIcon");

  ////////////////////////////////////////////////////////////////////////////////

  setTimeout(function(){
    window.scrollTo(0,0);
  }, 0);

  ////////////////////////////////////////////////////////////////////////////////

  btnHome.style.display = "none";
  btnAbout.style.display = "none";
  btnSkills.style.display = "none";
  btnProjects.style.display = "none";
  btnContact.style.display = "none";
  btnAccount.style.display = "none";
  btnBlog.style.display = "none";

  ////////////////////////////////////////////////////////////////////////////////

  // *CLASS SELECTION FUNCTION* Change display value by inputting the parameters (element, value)

  function setClassVisability(element, value) {
    for (var i = 0; i < element.length; i++){
      element[i].style.display = value;
    };
  }

  ////////////////////////////////////////////////////////////////////////////////

  // *ID SELECTION FUNCTION* Change display value by inputting the parameters (element, value)
  function setIdVisability(variableName, value) {
    variableName.style.display = value;
  }

  ////////////////////////////////////////////////////////////////////////////////

  // *ID CLASS SELECTION FUNCTION* Change display value of all classes within an ID by using parameters (element, value)
  function setAllClassWithinIdVisability(variableName, value){

    // Loops through to select all elements within this ID
    for (i = 0; i < variableName.length; i++) {
      variableName[i].style.display = value;
    };
  }

  ////////////////////////////////////////////////////////////////////////////////

  function showDropdown() {
    setClassVisability(navLinks, "block");

    // set the navigation link visability to block using the class selection function (see above)
    setAllClassWithinIdVisability(navIcons, "inline-block");
    setIdVisability(navLinkList, "block");
    navLinkVisability = true;
    dropDownStatus = true;
    nav.classList.toggle("dropdownStyle");
    brand.classList.toggle("dropdownStyle");
    btnDropdown.classList.toggle("dropdownStyle");
    hamburgerIcon.style.background = "#292929";
  }

  ////////////////////////////////////////////////////////////////////////////////

  function hideDropdown(){
    setClassVisability(navLinks, "none");
    setClassVisability(navIcons, "none");
    setIdVisability(navLinkList, "none");
    navLinkVisability = false;
    dropDownStatus = false;
    nav.classList.toggle("dropdownStyle");
    brand.classList.toggle("dropdownStyle");
    btnDropdown.classList.toggle("dropdownStyle");
    hamburgerIcon.style.background = "white";
  }

  ////////////////////////////////////////////////////////////////////////////////

  function scrollToSection(section) {
    section.scrollIntoView(true);
    if (viewportWidth < 990) {
      hideDropdown();
    }
  }

  ////////////////////////////////////////////////////////////////////////////////

  window.addEventListener('resize', function() {
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth > 991 && timeout == true) {
      setClassVisability(navLinks, "block");
      setClassVisability(navIcons, "block");
      setIdVisability(navLinkList, "inline-flex");
      navLinkVisability = true;
      timeout = false;
      setTimeout(function(){
        timeout = true;
      }, 0);
    } else if (viewportWidth <= 991 && timeout == true && dropDownStatus == false) {
      setClassVisability(navIcons, "none");
      setIdVisability(navLinkList, "none");
      navLinkVisability = false;
      timeout = false;
      setTimeout(function(){
        timeout = true;
      }, 0);
    } else if (viewportWidth < 991 && timeout == true && dropDownStatus == true) {
      setClassVisability(navIcons, "inline-block");
      setIdVisability(navLinkList, "block");
    }
  }, false);

  ////////////////////////////////////////////////////////////////////////////////

  btnStart.onclick = function() {
    document.body.style.overflow = "visible";
    aboutMeSection.classList.toggle("fade");
    nav.style.display = "flex";
    nav.classList.toggle("fade");
    landingPage.classList.toggle("fade");
    setTimeout(function(){
      landingPage.style.display = "none";
    }, 200);
    if (viewportWidth > 991) {
      setClassVisability(navLinks, "block");
      setClassVisability(navIcons, "block");
      setIdVisability(navLinkList, "inline-flex");
    }
    btnAccount.style.display = "inline-flex";
    btnBlog.style.display = "inline-flex";
  }

  ////////////////////////////////////////////////////////////////////////////////

  btnHome.onclick = function() {
    // hides home page overflow to prevent scrolling
    document.body.style.overflow = "hidden";
    // immediately scrolls back to the very top of the page (aka. home page)
    window.scrollTo(0,0);
    // scrolls back to the top, if the user manages to bypass overflow on "home-load"
    setTimeout(function(){
      window.scrollTo(0,0);
    }, 500)
    // if mobile screen size, hide the dropdown
    if (viewportWidth < 990) {
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
    btnHome.style.display = "none";
    btnAbout.style.display = "none";
    btnSkills.style.display = "none";
    btnProjects.style.display = "none";
    btnContact.style.display = "none";
    btnAccount.style.display = "none";
    btnBlog.style.display = "none";
  }

  ////////////////////////////////////////////////////////////////////////////////

  btnDropdown.onclick = function(){
    if (dropDownStatus == false){
      showDropdown();
    } else {
      hideDropdown();
    }
  }

  btnDropdown.onmouseover = function() {
    if (dropDownStatus) {
      hamburgerIcon.style.background = "red";
    } else {
      hamburgerIcon.style.background = "#ccc";
    }
  }

  btnDropdown.onmouseout = function() {
    if (dropDownStatus) {
      hamburgerIcon.style.background = "#292929";
    } else {
      hamburgerIcon.style.background = "white";
    }
  }

  ////////////////////////////////////////////////////////////////////////////////

  btnAbout.onclick = function(){scrollToSection(aboutMeSection)}
  btnSkills.onclick = function(){scrollToSection(skillsSection)}
  btnProjects.onclick = function(){scrollToSection(projectsSection)}
  btnContact.onclick = function(){scrollToSection(contactSection)}


  ////////////////////////////////////////////////////////////////////////////////

  //###################################################
  // ANIMATION PROJECTS ###############################
  //###################################################

  var apps = [appAdvBattleships, appSimpleCalculator, appPomodoro, appWordCounter, appBouncyBalls, moreApps];


  ////////////////////////////////////////////////////////////////////////////////

  // This function hides all of the apps except for the one specified when called.

  function hideAllOtherApps(app) {
    for (var i = 0; i < apps.length; i++) {
      if (apps[i] !== app) {
        if (app.classList[1] === "app-large") {
          resetAppDisplay(i);
        } else {
          setIdVisability(apps[i], "none");
        }
      }
    }
  }

  ////////////////////////////////////////////////////////////////////////////////

  // This function returns all other apps to their original display value when the
  // grown app shrinks back to normal size.

  function resetAppDisplay(num){
    setTimeout(function(){
      setIdVisability(apps[num], "flex");
    }, 350);
  }

  ////////////////////////////////////////////////////////////////////////////////

  // This function toggles all of the classes to allow for them to expand and shrink.

  function appExpand(app, img, btn, name) {
    app.classList.toggle("app-small");
    app.classList.toggle("app-large");
    img.classList.toggle("appImg-small");
    img.classList.toggle("appImg-large");
    btn.classList.toggle("appName-small");
    btn.classList.toggle("appName-large");

    if (btn.innerHTML === "X") {
      btn.innerHTML = name;
    } else {
      btn.innerHTML = "X";
    }
  }

  ////////////////////////////////////////////////////////////////////////////////

  // These are the app buttons that make them grow and shrink.

  btnAdvBattleships.onclick = function() {
    hideAllOtherApps(appAdvBattleships);
    appExpand(appAdvBattleships, appImgBattleships, btnAdvBattleships, "Battleships");
  }

  btnCalculator.onclick = function() {
    hideAllOtherApps(appSimpleCalculator);
    appExpand(appSimpleCalculator, appImgCalculator, btnCalculator, "Calculator");
  }

  btnPomodoro.onclick = function() {
    hideAllOtherApps(appPomodoro);
    appExpand(appPomodoro, appImgPomodoro, btnPomodoro, "Pomodoro");
  }

  btnWordCounter.onclick = function() {
    hideAllOtherApps(appWordCounter);
    appExpand(appWordCounter, appImgWordCounter, btnWordCounter, "Word Counter");
  }

  btnBouncyBalls.onclick = function() {
    hideAllOtherApps(appBouncyBalls);
    appExpand(appBouncyBalls, appImgBouncyBalls, btnBouncyBalls, "Bouncy Balls");
  }

  btnMoreApps.onclick = function() {
    hideAllOtherApps(moreApps);
    appExpand(moreApps, appImgMoreApps, btnMoreApps, "More Apps");
  }

} // WINDOW.ONLOAD ENDS HERE

////////////////////////////////////////////////////////////////////////////////

// When the user leaves the page, scroll back to top.
// This means returning back to the page will return to top.

window.onbeforeunload = function() {
  window.scrollTo(0,0);
}
