
//Map
var gooseo_position = new naver.maps.LatLng(35.244949, 129.0891441);
var kimhae_position = new naver.maps.LatLng(35.2347115, 128.8566677);

var map = new naver.maps.Map('map', {
    center: gooseo_position,
    zoom: 11
});

var gooseo_markerOptions = {
    position: gooseo_position.destinationPoint(0, 10),
    map: map,
    icon: {
        url: '/img/map-marker.svg',
        size: new naver.maps.Size(48, 48),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(24, 24)
    }
};

var kimhae_markerOptions = {
    position: kimhae_position.destinationPoint(0, 10),
    map: map,
    icon: {
        url: '/img/map-marker.svg',
        size: new naver.maps.Size(48, 48),
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(24, 24)
    }
};

var gooseo_gmarker = new naver.maps.Marker({
    position: gooseo_position,
    map: map
});
var kimhae_gmarker = new naver.maps.Marker({
    position: kimhae_position,
    map: map
});

// image
var slideIndex = 0;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();


//jquery
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

  $('#contact-1').click(function() {
    $('#contact-info-1').removeClass("contact-hide");
    $('#contact-info-2').addClass('contact-hide');
    map.setCenter(gooseo_position);
  });

  $('#contact-2').click(function() {
    $('#contact-info-1').addClass("contact-hide");
    $('#contact-info-2').removeClass('contact-hide');
    map.setCenter(kimhae_position);
  });

})(jQuery); // End of use strict