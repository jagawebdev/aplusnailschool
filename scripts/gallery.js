/*global $ */
/*global angular */

$(document).ready(function() {
  $('.hamburger').click( function(event){
        event.stopPropagation();
        $('.drop-menu').toggle();
    });

    $(document).click( function(){
        $('.drop-menu').hide();
    });
    
    $(".list-image").mouseenter(function() {
      $(".list-image").siblings().addClass("fade");
    });
    
    $(".fancybox").fancybox();

});