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

  
});