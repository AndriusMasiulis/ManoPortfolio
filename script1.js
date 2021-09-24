//Nav bar that disappears when scrolling down

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("headerContainer").style.top = "0";
  } else {
    document.getElementById("headerContainer").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

//To top button
mybutton = document.getElementById("myBtn");

document.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}

// Dark theme

var icon = document.getElementById("icon");
var linkedIn = document.getElementById("linkedIn");
var facebook = document.getElementById("facebookLogo");
var instagram = document.getElementById("instagramLogo");

icon.onclick = function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme"))
  {
    icon.src = "./nuotraukos/sun.png"
    linkedIn.src = "./nuotraukos/linkedin.png"
    facebook.src = "./nuotraukos/facebook.png"
    instagram.src = "./nuotraukos/instagram.png"
  }
  else
  {
    icon.src = "./nuotraukos/moon.png"
    linkedIn.src = "https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-512.png"
    facebook.src = "https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png"
    instagram.src = "https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-512.png"

  }
}
