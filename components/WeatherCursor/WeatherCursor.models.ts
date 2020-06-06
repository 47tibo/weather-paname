import { HourlyWeather } from '../../api/weather/weather.models';

export type WeatherCursorProps = {
  weather: HourlyWeather | null
}

export type CursorTopProps = {
  temp: number,
  wind_speed: number,
  wind_deg: number,
}
