/*global $ */

$(document).ready(function() {
  
  
  $('.hamburger').click( function(event){
        event.stopPropagation();
        $('.drop-menu').toggle();
    });

    $(document).click( function(){
        $('.drop-menu').hide();
    });

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