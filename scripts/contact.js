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
    $(".list").each(function(i) {
        setTimeout(function() {
             $(".list").eq(i).addClass("show"); 
        },200 * i);
      
    });
    
}

 