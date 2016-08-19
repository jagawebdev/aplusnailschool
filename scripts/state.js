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

        
    $(".board-nav1").click(function() {
        var currentBoard = $('.active-board');
        var currentNav =$(".active-nav");
        $(".board-nav1").addClass("active-nav");
        $(".board1").addClass("active-board");
        currentBoard.removeClass("active-board");
        currentNav.removeClass("active-nav");
    });
    
    
    
     $(".board-nav2").click(function() {
         var currentBoard = $('.active-board');
        var currentNav =$(".active-nav");
        $(".board-nav2").addClass("active-nav");
        $(".board2").addClass("active-board");
        currentBoard.removeClass("active-board");
        currentNav.removeClass("active-nav");
    });
    
     $(".board-nav3").click(function() {
         var currentBoard = $('.active-board');
        var currentNav =$(".active-nav");
        $(".board-nav3").addClass("active-nav");
        $(".board3").addClass("active-board");
        currentBoard.removeClass("active-board");
        currentNav.removeClass("active-nav");
    });
    
     $(".board-nav4").click(function() {
         var currentBoard = $('.active-board');
        var currentNav =$(".active-nav");
        $(".board-nav4").addClass("active-nav");
        $(".board4").addClass("active-board");
        currentBoard.removeClass("active-board");
        currentNav.removeClass("active-nav");
    });