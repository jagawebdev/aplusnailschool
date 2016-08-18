/*global $ */

$(document).ready(function() {
  
  
  $('.hamburger').click( function(event){
        event.stopPropagation();
        $('.drop-menu').toggle();
    });

    $(document).click( function(){
        $('.drop-menu').hide();
    });
    
    
    $("#slideshow > div:gt(0)").hide();
         setInterval(function() { 
          $('#slideshow> div:first')
          .fadeOut(1000)
          .next()
          .delay(1000)
            .fadeIn(2000)
            .end()
            .delay(1000)
            .appendTo('#slideshow');
        },  6000);

        $("#reviews > div:gt(0)").hide();
         setInterval(function() { 
          $('#reviews > div:first')
          .fadeOut(1000)
          .next()
          .delay(1000)
            .fadeIn(2000)
            .end()
            .delay(1000)
            .appendTo('#reviews');
        },  10000);
    
    

    });

$(window).scroll(function() {
  showInfo();
});

function showInfo() {
   var wScroll = $(window).scrollTop();
  if($('.program').offset().top - $(window).height() / 2 < wScroll) {
    $(".list").each(function(i) {
        setTimeout(function() {
             $(".list").eq(i).addClass("show"); 
        },200 * i);
      
    });
  }
}