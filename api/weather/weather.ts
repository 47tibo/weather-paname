import axios from 'axios';
import { DayWeather, WeatherResponse } from './weather.model';
import { WEATHER_URL } from '../api.constants';
import { getDate, getMonth, getWeekDay } from '../../utils/date/date.utils';

export async function getWeather() {
  let response = await axios.get(WEATHER_URL);
  return response.data;
}

export function getDays(weather: WeatherResponse): DayWeather[] {
  return weather.daily.map(day => {
    const date = new Date(day.dt * 1000);
    return {
      key: day.dt.toString(),
      weekday: getWeekDay(date, true),
      month: getMonth(date),
      day: getDate(date)
    };
  });
}
