function WeatherCard({ data, getKhmerDay, getWeatherIcon }) {
  const date = new Date();
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  return (
    <div className="gradient-bg text-white rounded-xl p-8 shadow-xl mb-8 mt-25">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">
          {data.name}, {data.sys.country}
        </h2>
        <p className="text-lg opacity-90 mb-6">
          {getKhmerDay(date)} ទី {formattedDate}
        </p>

        <div className="text-6xl font-bold mb-2">
          {Math.round(data.main.temp)}°C
        </div>

        <div className="text-xl capitalize mb-4">
          {data.weather[0].description}
        </div>

        <img
          src={getWeatherIcon(data.weather[0].icon)}
          alt={data.weather[0].description}
          className="w-24 h-24 mx-auto mb-6"
        />

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-6">
          <div className="text-center">
            <div className="font-semibold text-lg">សីតុណ្ហភាពអតិបរមា</div>
            <div className="text-xl">{Math.round(data.main.temp_max)}°C</div>
          </div>

          <div className="text-center">
            <div className="font-semibold text-lg">សីតុណ្ហភាពអប្បបរមា</div>
            <div className="text-xl">{Math.round(data.main.temp_min)}°C</div>
          </div>

          <div className="text-center">
            <div className="font-semibold text-lg">សំណើម</div>
            <div className="text-xl">{data.main.humidity}%</div>
          </div>

          <div className="text-center">
            <div className="font-semibold text-lg">ល្បឿនខ្យល់</div>
            <div className="text-xl">{Math.round(data.wind.speed)} m/s</div>
          </div>

          <div className="text-center">
            <div className="font-semibold text-lg">សម្ពាធ</div>
            <div className="text-xl">{data.main.pressure} hPa</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
