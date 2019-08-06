import React from 'react';

const checkUnicode = {
   "Clear": "\u2600",
   "Clouds": "\u2601",
   "Rain": "\ud83c\udf27",
   "Drizzle": "\ud83c\udf27",
   "Snow": "\u2746",
   "Thunderstorm": "\ud83d\uddf2",
   "Mist": "\ud83c\udf2b",
   "Fog": "\ud83c\udf2b",
   "Haze": "\ud83c\udf2b"
}

const Weather = props => (
   <div>
   {props.city && props.notError !== false &&
      <div>
         <div>Информация о погоде для города: {props.city}, {props.country}</div>
         <div>Температура: {props.temp}&#8451;</div>
         <div>Облачность: {props.clouds}%</div>
         <div>Скорость ветра: {props.windSpeed} м/сек</div>
         <div>{checkUnicode[props.main]} {props.desc}</div>
      </div>
   }
   <div>{props.errorText}</div>
   </div>
);

export default Weather;
