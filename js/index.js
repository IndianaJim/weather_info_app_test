if("geolocation" in Navigator){
   navigator.geolocation.getcurrentposition(function(position){
     loadWeather(position.coords.latitude + position.coords.longitude);
   });
 } else {
   loadWeather("Chicago, US", "");
 }
$(document).ready(function() {
  setInterval(getWeather, 10000);
}); /* end doc ready... */
   
function loadWeather(location, woeid){
  $.simpleWeather({
    location: location,
    woeid = woeid,
    unit: 'f',
    success: function(weather){
      city = weather.city;
      temp = weather.temp+'&deg;';
      wcode = '<img class="weatherIcon" src="images/weathericons' + weather.code + '.svg"
      wind = '<p>'+ weather.wind.speed + '</p><p>' + weather.units.speed + '</p>';
      humidity = weather.humidity + ' %';
    
      $(".location").text(city);
      $(".temperature").html(temp);
      $(".windspeed").html(wind);
      $(".humidity").text(humidity);
    },
    error: function(error){
      $(".error").html('<p>' + error + '</p>');
    }
  });
}
