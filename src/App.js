import React from 'react';
import './App.css';
import Info from './components/Info/';
import Form from './components/Form/';
import Weather from './components/Weather/';

const API_KEY = "90c83931884968202417d6bb1488ce16";
const ERROR_MESSAGE = "Неудачный запрос. Возможно, вы ввели неправильное название города";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: null,
      country: null,
      temp: null,
      clouds: null,
      windSpeed: null,
      main: null,
      desc: null,
      notError: null,
      errorText: null
    }
  }

  gettingData = async (e) => {
    e.preventDefault();
    const city_name = e.target.elements.city.value;
    let response = await
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${API_KEY}&lang=ru`)
    if (response.ok) {
      const allData = await response.json();
      this.setState({
        city: allData.name,
        country: allData.sys.country,
        temp: allData.main.temp,
        clouds: allData.clouds.all,
        windSpeed: allData.wind.speed,
        main: allData.weather[0].main,
        desc: allData.weather[0].description,
        notError: true,
        errorText: null
      });
      console.log(allData);
    } else {
      // alert("Неудачный запрос. Возможно, вы ввели неправильное название города");
      this.setState({notError: response.ok})
      this.setState({errorText: `${response.status} ${response.statusText} ${ERROR_MESSAGE}`})
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="info"><Info /></div>
            <div className="weather-menu">
            <div className=" form"><Form gettingData = {this.gettingData}/></div>
              <div className="weather-info"><Weather {...this.state} /></div>
            </div>

            </div>
          </div>
        </div>
    );
  }
}

export default App;
