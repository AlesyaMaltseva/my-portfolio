let clouds = ['img/cloud1.svg', 'img/cloud2.svg', 'img/cloud3.svg', 'img/cloud4.svg', 'img/cloud5.svg'];
function howClouds(max,min) {
   let cloudsInt = Math.floor(Math.random()*(max-min)+min);
   return cloudsInt;
};
function getClouds(brt) { 
     for(i=0;i<brt;i++) {
          $('#clouds').append('<img src="'+clouds[howClouds(clouds.length,0)]+'" />');        
        };  
    $("#clouds img").each(function () {
        let randomtop = Math.floor(Math.random() * ($('#clouds').height() - $(this).height() - 20)),
            randomleft = Math.floor(Math.random() * ($('#clouds').width() - $(this).width() - 20)),
            randomzindex = Math.floor(Math.random() * 50);
        $(this).css({
            "top": randomtop,
            "left": randomleft,
            "z-index": randomzindex,
        });

        $(this).on('mouseenter', function() {            
        $(this).css({'opacity':'0.8'});
    })

    $(this).on('click', function() {
//          $(this).get(0).animate([{"transform": "scale(1.5)","opacity":"1"}],
// {duration: 200,easing:'linear'});
        $(this).get(0).animate([{"transform": "scale(0)","opacity":"1"}],
{duration: 300,easing:'linear'});       

setTimeout(() => $(this).remove(),250);
    })

    $(this).animate({'opacity':'0.4'},300,'linear');
        $(this).animate({'left':'+=50','top':'-=10','opacity':'0.5'},5000,'linear');
        $(this).animate({'left':'+=40','top':'+=20'},5000,'linear');
        $(this).animate({'left':'+=30','top':'-=20'},5000,'linear');
        $(this).animate({'left':'+=40','top':'-=20','opacity':'0'},5000,'linear');
       
        setTimeout(() => $(this).remove(),20000);

    })}


$(document).ready(function() {

    getClouds(4);

    setInterval(() => getClouds(2),3000);
    
// Формирование классов slide
$('.templates > div').addClass('slide');
$('.templates > div > div').addClass('slide2');
//$('.slide2').after('<div class="backg"></div>');
//$('.backg').css('display','block');
//let winW = $(window).width();
//let maskWidth = $('.slide2').css('-webkit-mask-size');



// Start templates
  // const slider = document.querySelector('.templates');
  // let isDown = false;
  // let startX;
  // let scrollLeft;

  // slider.addEventListener('mousedown', (e) => {
  //   isDown = true;
  //   slider.classList.add('active');
  //   startX = e.pageX - slider.offsetLeft;
  //   scrollLeft = slider.scrollLeft;
  // });
  // slider.addEventListener('mouseleave', () => {
  //   isDown = false;
  //   slider.classList.remove('active');
  // });
  // slider.addEventListener('mouseup', () => {
  //   isDown = false;
  //   slider.classList.remove('active');
  // });
  // slider.addEventListener('mousemove', (e) => {
  //   if(!isDown) return;
  //   e.preventDefault();
  //   const x = e.pageX - slider.offsetLeft;
  //   const walk = (x - startX) * 1; //scroll-fast
  //   slider.scrollLeft = scrollLeft - walk;
  //   });
  // End templates     


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
  // console.log($('.slide').first().offset().left) 
}

setInterval(() => getOffset(), 50);



  // if($('.slide').first().offset().left != 0) {
  //$('.slide').first().left = 0;
  
  // }
// console.log($('.slide').first().offset().left)
 
    //   let plusWidthS = $('.slide').first().width(); // Ширина первого slide
    //   let plusWidthL = $('.slide').last().width(); // Ширина последнего slide 

    //   widthT = $('.templates').width(); // Ширина templates
      
    //   let smotrimF = $('.slide').first().offset(); //
    //   let smotrimL = $('.slide').last().offset();
    //   let smotrimLEnd = smotrimL.left + plusWidthS;
    //   let smotrimTl = $('.templates').offset();
    //   let smotrimTr = smotrimTl.left + widthT;
              
    //   $('#smotrimF span').text(smotrimF.left);
    //   $('#smotrimL span').text(smotrimL.left);
    //   $('#smotrimLEnd span').text(smotrimLEnd);
    //   $('#smotrimWs span').text(plusWidthS);
    //   $('#smotrimTl span').text(smotrimTl.left);
    //   $('#smotrimTr span').text(smotrimTr);
    //   $('#smotrimW span').text(widthT);

    // firstSlideLeft = $('.slide').first().offset().left;
    // templateLeft = $('.templates').offset().left;
    // templateRight = firstSlideLeft+widthT;
    // lastSlideRight = $('.slide').last().offset().left+$('.slide').last().width();
  

   
    
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