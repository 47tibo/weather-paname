import { HourlyWeather, HourWeather } from '../../api/weather/weather.models';

export type WeatherCanvasProps = {
  weather: HourlyWeather | null,
  hour: HourWeather | null
}
