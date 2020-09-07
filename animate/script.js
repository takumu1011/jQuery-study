$(function () {
  $('#text').on('click', function () {
    $('.text__inner').animate(
      {
        opacity: 0.8,
        fontSize: '24px',
        //数値型のみなので効かない
        //transform: 'rotate(45deg');
      },
      2000,
      'linear',
      function () {
        alert('アニメーション終了');
      }
    );
  });
});
