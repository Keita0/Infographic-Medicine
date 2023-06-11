// SMOOTH SCROLLING SECTIONS
$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
      || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           $('html,body').animate({
               scrollTop: target.offset().top
          }, 1000);
          return false;
      }
  }
});
function reveal() {
  var reveals = document.querySelectorAll(".SectionContent");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.remove("animate__fadeOut");
      reveals[i].classList.add("animate__fadeIn");
    } else {
      reveals[i].classList.remove("animate__fadeIn");
      reveals[i].classList.add("animate__fadeOut");
    }
  }
}
window.addEventListener("scroll", reveal);
