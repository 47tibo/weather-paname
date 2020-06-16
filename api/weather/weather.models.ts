// https://openweathermap.org/api/one-call-api

import { HourSegment } from './weather.constants';

export interface WeatherResponse {
  lat: string,
  lon: string,
  current: {
    dt: number,
    sunrise: number,
    sunset: number,
    temp: number,
    feels_like: number,
    pressure: number,
    humidity: number,
    uvi: number,
    clouds: number,
    visibility: number,
    wind_speed: number,
    wind_deg: number,
  },
  hourly: HourlyWeather[],
  daily: DailyWeather[]
}

export interface HourlyWeather {
  dt: number,
  temp: number,
  feels_like: number,
  pressure: number,
  humidity: number,
  clouds: number,
  wind_speed: number,
  wind_deg: number,
}

interface DailyWeather {
  dt: number,
  sunrise: number,
  sunset: number,
  temp: {
    day: number,
    min: number,
    max: number,
    night: number,
    eve: number,
    morn: number
  },
  feels_like: {
    day: number,
    night: number,
    eve: number,
    morn: number
  },
  pressure: number,
  humidity: number,
  wind_speed: number,
  wind_deg: number,
  clouds: number,
  rain: number,
  uvi: number,
}

export interface DayWeather {
  dt: number
  weekday: string, // "Sat"
  month: string, // "June"
  day: string,
}

export interface HourWeather {
  isSegment: boolean;
  dt: number | HourSegment;
  hour: string // "1:00"
}
