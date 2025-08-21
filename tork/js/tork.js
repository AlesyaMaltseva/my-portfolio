//<script>

$('.lists.three.how > div').mouseover(function() {
    $(this).css({zIndex: 2});    
})

$('.lists.three.how > div').mouseout(function() {
    $(this).css({zIndex: 1});
})

function anim() {
    setTimeout(function() {
       $('.tork-banner').removeClass('anim');
        }, 400);
}

anim();

$('input+label').click(function(){
    $('img.t-logo').css('background-color','transparent');
    $('.tork-banner').addClass('anim');
    if($(this).hasClass('tab3')) {
        $('.t-banner').attr('src','img/banner3.jpg');
        $('img.t-logo').css('background-color','#0093ff');
    } else if ($(this).hasClass('tab2')) {
        $('.t-banner').attr('src','img/banner2.jpg');
    } else {
        $('.t-banner').attr('src','img/banner1.jpg'); 
    }     
    anim();
});