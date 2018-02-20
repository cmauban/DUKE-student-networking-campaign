/* MAD LIB SELECT ON CHANGE */
$(function () {
       $(".word-options").change(function () {
           var selectedText = $(this).find("option:selected").text();
           var selectedValue = $(this).val();
           // alert("Selected Text: " + selectedText + " Value: " + selectedValue);
           var selected = $(this);
           selected.parent().parent().parent().parent().parent().addClass('expand');

       });

       $('.play-button-container').on('click', function(){
         $(this).parent().parent().parent().addClass('expand');
       })

       $('.info.centered').on('click', function(){
         $(this).parent().addClass('expand');
       })

        $('.close').on('click', function(){
          $('.tile.small.expand').removeClass('expand');
        });


   });


;(function(){
  var app = angular.module('madlib', []);

    app.controller('countController', function($http, $rootScope){

      $http.get('api/company.json')
        .then(function(response){
          $rootScope.items = response.data;
          console.log(response.data);
        });
    });

})();
