$(function () {
  let duration = 300;

  $('#buttons1 button:nth-child(-n+4)')
    .on('mouseover', function () {
      $(this).stop(true).animate(
        {
          backgroundColor: '#ae5e9b',
          color: '#fff',
        },
        duration
      );
    })
    .on('mouseout', function () {
      $(this).stop(true).animate(
        {
          backgroundColor: '#fff',
          color: '#ebc000',
        },
        duration
      );
    });

  $('#buttons1 button:nth-child(n+5):nth-child(-n+8)')
    .on('mouseover', function () {
      $(this).stop(true).animate(
        {
          borderWidth: '12px',
          color: '#ae5e9b',
        },
        duration,
        'linear'
      );
    })
    .on('mouseout', function () {
      $(this).stop(true).animate(
        {
          borderWidth: '0px',
          color: '#ebc000',
        },
        duration,
        'swing'
      );
    });

  $('#buttons1 button:nth-child(n+9)')
    .on('mouseenter', function () {
      $(this).find('> span').stop(true).animate(
        {
          width: '100%',
        },
        duration,
        'linear'
      );
    })
    .on('mouseleave', function () {
      $(this).find('> span').stop(true).animate(
        {
          width: '0%',
        },
        duration,
        'linear'
      );
    });
});
