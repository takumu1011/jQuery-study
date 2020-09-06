$('.list__item').each(function (index, element) {
  if (index === 1) {
    $(element).css({
      color: '#ff0000',
      'font-size': '24px',
    });
  }
});

let array = [20, 40, 60, 80];
$.each(array, function (index, value) {
  console.log(index + ':' + value);
});

let obj = {
  name: 'taro',
  age: 20,
  area: 'Tokyo',
};
$.each(obj, function (prop, value) {
  console.log(prop + ':' + value);
});
