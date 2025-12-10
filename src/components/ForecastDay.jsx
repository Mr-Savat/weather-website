function ForecastDay({ day, getKhmerDay, getWeatherIcon }) {
  const date = new Date(day.dt * 1000);
  const dayName = getKhmerDay(date);
  const dayNumber = date.getDate();
  const month = date.getMonth() + 1;

  return (
    <div className="weather-card">
      <h3 className="text-lg font-bold text-blue-600 mb-3">
        {dayName} ទី {dayNumber}/{month}
      </h3>

      <img
        src={getWeatherIcon(day.weather[0].icon)}
        alt={day.weather[0].description}
        className="w-16 h-16 mx-auto mb-3"
      />

      <div className="text-gray-600 capitalize text-sm mb-2">
        {day.weather[0].description}
      </div>

      <div className="text-2xl font-bold text-purple-600 mb-4">
        {Math.round(day.main.temp)}°C
      </div>

      <div className="grid grid-cols-3 gap-2 text-xs">
        <div className="text-center">
          <div className="font-semibold text-blue-600">អតិបរមា</div>
          <div className="text-gray-700">{Math.round(day.main.temp_max)}°C</div>
        </div>

        <div className="text-center">
          <div className="font-semibold text-blue-600">អប្បបរមា</div>
          <div className="text-gray-700">{Math.round(day.main.temp_min)}°C</div>
        </div>

        <div className="text-center">
          <div className="font-semibold text-blue-600">សំណើម</div>
          <div className="text-gray-700">{day.main.humidity}%</div>
        </div>
      </div>
    </div>
  );
}

export default ForecastDay