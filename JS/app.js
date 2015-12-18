$(document).ready(function(){
  var menu = $("#sticky-menu");
  var menuOfSetFromTop = menu.position().top;
  
  $(window).on("scroll", function(event){
    if ($(window).scrollTop() > menuOfSetFromTop){
      menu.addClass("sticky");
    }
    else {
      menu.removeClass("sticky");
    }

  });

// $("#button").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#elementtoScrollToID").offset().top
//     }, 2000);
// }); 


});