
var appId = '8e4c540fa9e3a264c17ba271fce209bb';
var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=' + appId;
// var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=' + appId;

$(document).ready(function () {
  console.log("ready!");

  $('#city-name').text('this is city name');
  $('#current-temp').text('this is current temp');

  console.log('1) this is first');

  var storeData = 'Nothing';

  $('.show-me-weather').click(function () {
    $.getJSON(weatherApiUrl, function (cityTempData) {
      // cityTempData is the json object
      console.log('2) output the api data here', cityTempData);
      $('#city-name').text(cityTempData.name);
      console.log('show me main object', cityTempData.main);
      $('#current-temp').text(cityTempData.main.temp);
    });
  });

  console.log('3) this should load last');
});
