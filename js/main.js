/* ------ BASIC -------*/

function getId(id){
    return document.getElementById(id);
}

function getTag(tag, number){
    return document.getElementsByTagName(tag)[number];
}

function getCl(ok, a){
    return document.querySelectorAll(ok)[a];
}

/* ------ BASIC -------*/

/*********************NAV*******************/
function openNav() {
   getId("mySidenav").style.width = "100%";
}

function closeNav() {
    getId("mySidenav").style.width = "0";
}
/*********************NAV***********************/
/*-----------------MOUSE-----------------*/
$(document).ready(function(){
    $(".header").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
/*-----------------MOUSE-----------------*/

/**************SLIDER*******************/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  
  slides[slideIndex-1].style.display = "block"; 
  
}

/*************************************************/
$('.image-container').hover(
function(){
  $(this).find(".img").css({ 'box-shadow': '0 0 30px grey'})
  $(this).find("p").css({display: 'block'})
  $(this).find("h3").css({'text-decoration': 'underline', 'text-decoration-color': 'rgb(125, 190, 31)'})
},
function(){
  $(this).find(".img").css({'box-shadow': 'none'})
  $(this).find("p").css({display: 'none'})
  $(this).find("h3").css({'text-decoration': 'none'})
})


