$('.list__item:first').css('background-color', '#ff0000');
$('.list__item:last').css('background-color', '#00ffff');
$('.list__item:eq(3)').css('background-color', '#ccc');

$('.list__item').eq(2).css({
  'background-color': '#000',
  color: '#fff',
});
