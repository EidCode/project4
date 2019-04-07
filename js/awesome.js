/*global $, alert, console*/

$("document").ready(function () {
    "use strict";
    $('.container1').fadeIn(3000);
 $('nav span').click(function () {
$('.main-menu').fadeIn(300)

 });

 $('.menu-bar span i').click(function () {
   $('.main-menu').fadeOut(300)
 });

 // trigger nice scroll
    $("html").niceScroll({
        cursorcolor: '#2A363B',
        cursorwidth: '7px',
        cursorborder: '#ccc'
    });
    $(window).scroll(function () {
      console.log($(window).scrollTop());
      if($(window).scrollTop() >= 1200) {
        $('nav').css('background-color', 'rgba(0, 0, 0, 0.54)')
      }else {
        $('nav').css('background-color', 'transparent')
      }
    });
});
