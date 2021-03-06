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

$(function(){
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 64
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

     /* NAV */
    // var btn = $('#nav-btn'),
    //     nav = $('.site-nav'),
    //     links = $('.nav-links a');


    // btn.click(function(){
    //     nav.toggleClass('site-nav-open');
    // });

    // links.click(function(){
    //     nav.toggleClass('site-nav-open');
    // });

    /* GALLERY SLIDE */
    $('.gallery-photos').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    baguetteBox.run('.gallery-photos');

    /* POPUP */
    const popupCloser = $('.popup-closer');
    const closer = $('.closer');

    popupCloser.click(function(){
        $(this).parent().remove();
    });

    closer.click(function(){
        $('.popup-holder').remove();
    });
    
    setTimeout(showPopup, 12000);
    setInterval(shakeTop, 4000);


    /* SIDEBAR */
    const hamburguerDesk = $('.hamburguer-wrapper'),
          sidebar = $('.sidebar'),
          closeSideBar = $('.sidebar-closer'),
          siteContent = $('.page-content');

    var toggleSideBar = function(){
        sidebar.toggleClass('sidebar-open');
        siteContent.toggleClass('fade-content');
    }

   

    hamburguerDesk.on('click', toggleSideBar);
    closeSideBar.on('click', toggleSideBar);
    $('.nav-links').on('click', 'a', toggleSideBar);

    
    
});

function showPopup() {
    const popup = $('.popup-holder');
    popup.addClass('popup-active');
}

function shakeTop() {
    const object = $('.icon-whatsapp');
    object.removeClass('shake-top');
    setTimeout(function(){
        object.addClass('shake-top');
    }, 2000);
    
}
