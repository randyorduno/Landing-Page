// Allows the navbar to have a 'sticky' feature and allows the navbar to always be visible

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myTopnav").style.top = "0";
  } else {
    document.getElementById("myTopnav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

// Toggle between adding and removin the active class when the user clicks on different links
var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", " ");
    this.className += " active";
  });
}

//Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Scrolling into different sections
function aboutFunction() {
  const about = document.getElementById('abt');
  about.scrollIntoView();
}

function miscFunction() {
  const misce = document.getElementById('misc');
  misce.scrollIntoView();
}

function bedFunction() {
  const hspbed = document.getElementById('hospbed');
  hspbed.scrollIntoView();
}

function respFunction() {
  const respit = document.getElementById('resp');
  respit.scrollIntoView();
}

function homeFunction() {
  document.documentElement.scrollTop = 0;
}

// Allows to change active class while scrolling to different sections
window.onscroll = function changeClass() {
  const scrollPosY = window.pageYOffset | document.body.scrollTop;
  const navBar = document.getElementById('myTopnav');
  const navBarHeight = navBar.getBoundingClientRect().height;
  const respSection = document.getElementById('section1');
  const homeSection = document.getElementById('home');
  const bedSection = document.getElementById('section2');
  const otherSection = document.getElementById('section3');
  const aboutSection = document.getElementById('about')
  const secondSection = document.getElementById('resp');
  const regSection = document.getElementById('regulator')
  const secondSectionTop = secondSection.getBoundingClientRect().top;
  const secondSectionBottom = regSection.getBoundingClientRect().bottom;
  const thirdSection = document.getElementById('hospbed');
  const thirdSectionTop = thirdSection.getBoundingClientRect().top;
  const railSection = document.getElementById('full-rails');
  const thirdSectionBottom = railSection.getBoundingClientRect().bottom;
  const fourthSection = document.getElementById('misc');
  const fourthSectionTop = fourthSection.getBoundingClientRect().top;
  const nebMaskSection = document.getElementById('neb-mask');
  const fourthSectionBottom = nebMaskSection.getBoundingClientRect().bottom;
  const fifthSection = document.getElementById('abt');
  const fifthSectionTop = fifthSection.getBoundingClientRect().top;
  const fifthSectionBottom = fifthSection.getBoundingClientRect().bottom;
  if (secondSectionTop <= navBarHeight) {
    section1.className = ('active link');
    home.className = ('');
  } else if (secondSectionTop >= navBarHeight) {
    home.className = ('active');
    section1.className = ('link');
  }
  if (secondSectionTop <= thirdSectionTop <= secondSectionBottom) {
    section2.className = ('link');
  } else if (secondSectionTop >= thirdSectionTop >= secondSectionBottom) {
    section2.className = ('active link')
    section1.className = ('link')
  }
  if (thirdSectionTop <= fourthSectionTop <= thirdSectionBottom) {
    section3.className = ('link');
  } else if (thirdSectionTop >= fourthSectionTop >= thirdSectionBottom) {
    section3.className = ('active link')
    section2.className = ('link')
  }
}
