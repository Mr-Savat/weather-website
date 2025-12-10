រង្វិលជុំនៃការទាញយកទិន្នន័យ:

អ្នកប្រើប្រាស់ → សរសេរទីក្រុង → ចុចស្វែងរក
      ↓
Navbar → បញ្ជូនទីក្រុងទៅ App.jsx
      ↓
App.jsx → ហៅ fetchWeatherData(cityName)
      ↓
fetchWeatherData → ផ្ញើសំណើទៅ OpenWeatherMap
      ↓
OpenWeatherMap → ឆ្លើយតបទិន្នន័យ JSON
      ↓
fetchWeatherData → បំលែងទិន្នន័យទៅជា Object
      ↓
App.jsx → ផ្ញើទិន្នន័យទៅ WeatherCard និង ForecastDay
      ↓
WeatherCard + ForecastDay → បង្ហាញទិន្នន័យលើអេក្រង់




ឧទាហរណ៍ពេលស្វែងរក "សៀមរាប"
text
១. អ្នកសរសេរ: "សៀមរាប"
២. ចុច: "ស្វែងរក"
៣. App.jsx ហៅ: fetchWeatherData("សៀមរាប")
៤. ផ្ញើសំណើទៅ: https://api.openweathermap.org/data/2.5/weather?q=សៀមរាប&units=metric&appid=...
៥. API ឆ្លើយតប: { "name": "Siem Reap", "main": { "temp": 31 }, ... }
៦. App.jsx ទទួលទិន្នន័យ
៧. WeatherCard បង្ហាញ: សៀមរាប, ៣១°C, ...
៨. ForecastDay បង្ហាញ: ថ្ងៃទី ១, ២, ៣, ៤, ៥