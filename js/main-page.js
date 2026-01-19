


$(document).ready(function() {

   
    
$('.templates > div').addClass('slide');
$('.templates > div > div').addClass('slide2');



  let threeCells;

// Количество слайдов  

//let threeCells = $('.templates').width() / howMuchSlides;

$('.templates').animate({'opacity':'1'},1000);
// $('.slide').css({width:threeCells+'px'});
let firstSlideLeft;
let templateLeft;
let lastSlideRight;
let widthT;


// Координаты  

function iOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}
//iOS();
let howMuchSlides =3;

function getOffset() { 
  
let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);  
if (isMobile) {
    $('#main-block').addClass('mobview');
    $('.mobview .slide').css({width:'315px'});
    } else {
  if ($(window).width() < 960 && $(window).width() > 500) {
    howMuchSlides =2;
  } else if ($(window).width() <= 500) {
    howMuchSlides =1;
  } else {
    howMuchSlides =3; 
     }      
    $('#main-block').removeClass('mobview')
    threeCells = $('.templates').width() / howMuchSlides;
      $('.slide').css({width:threeCells+'px'});

      
  }
 
}

setInterval(() => getOffset(), 50);



     
    
// Кнопки слвйдов

 let countSlider = 0; 
let num = $('.slide').length;
 $('.prev').addClass('dis');

  $('.next').on('click', function () {    
    if(countSlider!==num-howMuchSlides) {
      countSlider++;
      $('.slide').animate({'left':'-='+threeCells+'px'},400);  
      $('.prev').removeClass('dis');           
       }
    if (countSlider===num-howMuchSlides) {
       $('.next').addClass('dis');
       }   
    }
   );

$('.prev').on('click', function () {    
  if(countSlider!==0) {
    countSlider--;
    $('.slide').animate({'left':'+='+threeCells+'px'},400);  
    $('.next').removeClass('dis');  
    } 
    if(countSlider===0) {
      $('.prev').addClass('dis');
      
    }   
  } 
);


$('.seeall span').on('click', function() {
   $('.slide').fadeOut(0);
	 
    $('.templates').toggleClass('tSlide');
        
    $(this).text(function(i, text){
        return text === "Показать все" ? "Слайдер" : "Показать все";
       });
    $('button').toggle();
    $('.slide').css('left', '0', 'opacity', '0');
    countSlider = 0;
    $('.prev').addClass('dis');
    $('.next').removeClass('dis');

    $('.slide:eq(0)').fadeIn(150, function(){
	  $(this).next().fadeIn(100, arguments.callee);
    });    
  }
);

//let templatesX = $('.templates').offset().left;
$(window).resize(function() {
  if($('.templates').hasClass('tSlide')) {
    $('button').css({'display':'none'});
  }
  else {
    $('button').css({'display':'block'});
    }

    if($('#main-block').hasClass('mobview')) {
    $('button').css({'display':'none'});
    $('.slide').css('left', '0', 'opacity', '0');
   //$('.mobview .slide').first().offset({left:templatesX});
  } else {
     $('.slide').css({'left':'0'});
     $('.prev').addClass('dis');
    } 
   countSlider = 0;
    
    }
)

// Конец кнопки слвйдов 



// Кнопка Показать все

});
