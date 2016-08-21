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

});


var app = angular.module("myApp", []);

app.controller("MainController", 
['$scope', function($scope) {
  $scope.products = [
    {cover: 'images/gallery/pic9.jpg',},
    {cover: 'images/gallery/pic10.jpg',},
    {cover: 'images/gallery/pic11.jpg',},
    {cover: 'images/gallery/pic12.jpg',},
    {cover: 'images/gallery/pic1.jpg',},
    {cover: 'images/gallery/pic3.jpg',},
    {cover: 'images/gallery/pic4.jpg',},
    {cover: 'images/gallery/pic5.jpg',},
    {cover: 'images/gallery/pic6.jpg',},
    {cover: 'images/gallery/pic7.jpg',},
    {cover: 'images/gallery/pic13.jpg',},
    {cover: 'images/gallery/pic14.jpg',}
    ];
}]);