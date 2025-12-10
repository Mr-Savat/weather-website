import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import WeatherCard from './components/WeatherCard';
import ForecastDay from './components/ForecastDay';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import Footer from './components/Footer';

function App() {
  const [city, setCity] = useState('Phnom Penh');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const apiKey = "2e325f773939c10ee80b418505a78b4b";

  const khmerDays = ["អាទិត្យ", "ច័ន្ទ", "អង្គារ", "ពុធ", "ព្រហស្បតិ៍", "សុក្រ", "សៅរ៍"];

  const getKhmerDay = (date) => {
    const dayIndex = new Date(date).getDay();
    return khmerDays[dayIndex];
  };

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };



  const fetchWeatherData = async (cityName) => {
    try {
      setLoading(true);
      setError('');

      // Fetch current weather
      const currentResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
      );

      if (!currentResponse.ok) {
        throw new Error('រកមិនឃើញទីក្រុង! សូមព្យាយាមម្តងទៀត។');
      }

      const currentData = await currentResponse.json();

      // Fetch forecast
      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${apiKey}`
      );

      if (!forecastResponse.ok) {
        throw new Error('មានបញ្ហាក្នុងការទាញយកទិន្នន័យទស្សន៍ទាយ!');
      }

      const forecastData = await forecastResponse.json();

      // Process forecast data
      const dailyForecasts = [];
      const today = new Date().toDateString();

      for (let i = 0; i < forecastData.list.length; i++) {
        const forecast = forecastData.list[i];
        const forecastDate = new Date(forecast.dt * 1000);
        const forecastDateString = forecastDate.toDateString();

        if (forecastDate.getHours() >= 11 && forecastDate.getHours() <= 13) {
          if (forecastDateString !== today) {
            dailyForecasts.push(forecast);
          }

          if (dailyForecasts.length === 5) {
            break;
          }
        }
      }

      setWeatherData(currentData);
      setForecastData(dailyForecasts);
      setLoading(false);

    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Handle search from Navbar
  const handleSearch = (searchCity) => {
    setCity(searchCity);
    fetchWeatherData(searchCity);
  };

  useEffect(() => {
    fetchWeatherData('Phnom Penh');
  }, []);

  return (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Navbar Component */}
        <Navbar onSearch={handleSearch} />

        <div className="mt-50 sm:mt-15 ">
          {/* Loading */}
          {loading && <LoadingSpinner />}

          {/* Error Message */}
          {error && <ErrorMessage message={error} />}

          {/* Current Weather */}
          {weatherData && !loading && (
            <WeatherCard
              data={weatherData}
              getKhmerDay={getKhmerDay}
              getWeatherIcon={getWeatherIcon}
            />
          )}

          {/* Forecast */}
          {forecastData.length > 0 && !loading && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
                ព្យាករណ៍ ៥ ថ្ងៃទៅមុខ
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {forecastData.map((day, index) => (
                  <ForecastDay
                    key={index}
                    day={day}
                    getKhmerDay={getKhmerDay}
                    getWeatherIcon={getWeatherIcon}
                  />
                ))}
              </div>
            </div>
          )}

        </div>


        {/* Footer */}
        <Footer />

      </div>
    </div>
  );
}

export default App;