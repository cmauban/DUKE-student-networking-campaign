/* MAD LIB SELECT ON CHANGE */
$(function () {
       $("#madlib-green .word-options, #madlib-teal .word-options, #madlib-navy .word-options, #big-square .word-options").change(function () {
           var selectedText = $(this).find("option:selected").text();
           var selectedValue = $(this).val();
           var selected = $(this);
           selected.parent().parent().parent().parent().parent().addClass('expand');

       });

       $('.play-button-container').on('click', function(){
         $(this).parent().parent().addClass('expand');
       })

       $('.info.centered').on('click', function(){
         $(this).parent().addClass('expand');
       })

       $('.close').on('click', function(){
         $(this).closest('.tile.expand').removeClass('expand');
       });


   });


;(function(){
  var app = angular.module('madlib', []);

    app.controller('countController', function($http, $rootScope){

      $http.get('api/company.json')
        .then(function(response){
          $rootScope.items = response.data;
        });

        $http.get('api/industry.json')
          .then(function(response){
            $rootScope.industitems = response.data;
          });

      $http.get('api/city.json')
        .then(function(response){
          $rootScope.cityitems = response.data;
        });

        $http.get('api/major.json')
          .then(function(response){
            $rootScope.majoritems = response.data;
          });

    }); // end countController

})(); // end iffy

// CHECK list

$('.list__item').click(function() {
  $(this).toggleClass('checked');
  $(this).children('.list__item-icon').toggleClass('hide');
});

var printDivCSS = new String ('<link href="../css/student_networking.css" rel="stylesheet" type="text/css">')
            function printDiv(divId) {
                window.frames["print_frame"].document.body.innerHTML=printDivCSS + document.getElementById(divId).innerHTML;
                window.frames["print_frame"].window.focus();
                window.frames["print_frame"].window.print();
            }

//to go top of checklist in mobile
if ($(window).width() < 481) {
  $("#checklist").click(function() {
      $('html,body').animate({
          scrollTop: $(".checklist-container").offset().top});
  });
}
