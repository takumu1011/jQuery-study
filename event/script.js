$(function () {
  $('#text')
    .on('mouseover', function () {
      $(this).css('color', '#ff0000');
    })
    .on('mouseout', function () {
      $(this).css('color', '');
    });

  $(window).on('resize', function () {
    $('body').css('background-color', '#00ffff');
  });
});
