$(function () {
  $('#btn').on('click', function () {
    $.ajax({
      url: 'data.json',
      type: 'GET',
      dataType: 'json',
    })
      .done((datas) => {
        console.log(datas);
        let fragment = document.createDocumentFragment();
        datas.forEach((data) => {
          let li = document.createElement('li');
          li.textContent = data.name;
          fragment.append(li);
        });
        $('#result').append(fragment);
      })
      .fail((error) => {
        console.log(error);
      });
  });
});
