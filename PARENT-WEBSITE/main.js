console.log('JavaScript Ready')
console.log('This JavaScript is powered by Citrapy from Indonesia')

//! responsive navigation bar 
function showMobileNav() {
    var navbar = document.getElementById("navbar");
    if (navbar.className === "navibar") {
        navbar.className += " responsive";
    } else {
        navbar.className = "navibar";
    }
}

//! Button function checking
function showNotification(params) {
	alert(params.toString())
	return
}

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
