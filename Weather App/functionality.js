$(document).ready(function(){
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Ludus,ro&appid=b877cc138ceeb7015615b7b122be7958&units=metric", function(result){
      //console.log(result.weather[0].main);
      
      $('.vremea i').removeClass();
      
      switch(result.weather[0].main){
        case 'Clear': $('.vremea i').addClass('wi wi-day-sunny'); break;
        case 'Rain': $('.vremea i').addClass('wi wi-day-rain'); break;
        case 'Clouds': $('.vremea i').addClass('wi wi-day-cloudy'); break;   
      }
      $('.temperatura span').text(Math.round(result.main.temp));  
    });  
  });

