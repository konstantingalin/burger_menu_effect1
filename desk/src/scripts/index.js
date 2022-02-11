import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('webpack starterkit');

$(function() {

  $('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
    $('.menu-nav').toggleClass('menu-nav_active');
  });


  // $("._1").on("click","a", function (event) {
  //   event.preventDefault();
  //   var id  = $(this).attr('href'),
  //       top = $(id).offset().top;
  //   $('body,html').animate({scrollTop: top}, 1500);
  // });


  // $('.popup').magnificPopup();

});