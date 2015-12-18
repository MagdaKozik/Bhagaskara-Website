$(document).ready(function(){

function stickyMenu (){
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


function smoothScroll() {
    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 2000);
        return false;
    });
  }
}

function slider(){

  var person = $(".person");
  var personLength = person.length;
  var counter = 1;

  $(".prev").click(function(){

    var activeMember = $(".active");
    var actualNumber = activeMember.index();

    person.removeClass("active");

    if (actualNumber <= 0){
      counter =personLength-1;
    } else {
      counter--;
    }
    person.eq(counter).addClass("active");

  });

  $(".next").click(function(){
    var activeMember = $(".active");
    var actualNumber = activeMember.index();

    person.removeClass("active");
    
      if (actualNumber >= personLength -1 ){
          counter = 0;
      } else {
        counter++;
      }

      person.eq(counter).addClass("active");

  });
}

slider();

});