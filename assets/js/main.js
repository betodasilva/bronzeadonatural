$(window).scroll(function(){
    var header = $('.site-header'),
        simbolo = $('.simbolo'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 530) {
        header.addClass('fixed');
        simbolo.addClass('visible');
    }
    else { 
        header.removeClass('fixed');
        simbolo.removeClass('visible');
    }
});

