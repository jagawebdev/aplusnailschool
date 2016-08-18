/*global $ */

$(document).ready(function() {
  
  
  $('.hamburger').click( function(event){
        event.stopPropagation();
        $('.drop-menu').toggle();
    });

    $(document).click( function(){
        $('.drop-menu').hide();
    });
    
   showInfo();
});

function showInfo() {
    $(".info").each(function(i) {
        setTimeout(function() {
             $(".info").eq(i).addClass("show"); 
        },200 * i);
      
    });
    
}

 