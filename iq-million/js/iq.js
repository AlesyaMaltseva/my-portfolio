//<script>
$(document).ready(function(){
 
 $(".owl-carousel").owlCarousel({
 
		items: 3,
         loop: true,
         
         rewind: true,
         margin:30,
         
         nav: true,
		 center: true,
		 dots:false

  });
  
});

$(init);

function init() {
  $('#slider').append($('#c-wrap'));
  $('.scroll').append($('#region'));
 }


let bodyBlock = document.querySelector('body');
let mobMenu = document.querySelector('#mob-menu');
let grayBlock = document.querySelector('#gray');
let rulesMob = document.querySelector('#rules-mob');
let rulesMobA = document.querySelector('#r1');
let rulesMobB = document.querySelector('#r2');
let closeBlock = document.querySelector('#close');

mobMenu.addEventListener('click', mobMenuOpen)
closeBlock.addEventListener('click', mobMenuClose)
rulesMobA.addEventListener('click', mobMenuClose)
rulesMobB.addEventListener('click', mobMenuClose)

function mobMenuOpen() {
    grayBlock.style.display = 'block';
    bodyBlock.style.overflow = 'hidden';
}

function mobMenuClose() {
    grayBlock.style.display = 'none';
    bodyBlock.style.overflow = 'auto';
}
