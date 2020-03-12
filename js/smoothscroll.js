$(document).ready(function () {
  //run once
  var el = $('#Container');
  var originalelpos = el.offset().top; // take it where it originally is on the page

  //run on scroll
  $(window).scroll(function () {
    var el = $('#Container'); // important! (local)
    // var elpos = el.offset().top; // take current situation
    var windowpos = $(window).scrollTop();
    var finaldestination = windowpos + originalelpos;
    el.css('top', finaldestination);
    // el.stop().animate({ 'top': finaldestination }, 1000);
  });

});