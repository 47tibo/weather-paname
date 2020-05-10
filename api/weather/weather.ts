import {WEATHER_URL} from '../constants';
import axios from 'axios';
import { Day, WeatherResponse } from './weather.model';
import * as Localization from 'expo-localization';

export async function getWeather() {
  let response = await axios.get(WEATHER_URL);
  return response.data;
}

export function getDays(weather: WeatherResponse): Day[] {
  return weather.daily.map(day => {
    const date = new Date(day.dt * 1000);
    return {
      key: day.dt.toString(),
      weekday: date.toLocaleString(Localization.locale, {weekday: 'long'}),
      month: date.toLocaleString(Localization.locale, {month: 'long'}),
      day: date.toLocaleString(Localization.locale, {day: '2-digit'})
    };
  });
}
