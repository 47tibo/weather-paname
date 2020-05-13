import axios from 'axios';
import { WEATHER_URL } from '../api.constants';
import { getDate, getMonth, getWeekDay } from '../../utils/date/date.utils';
import { DayWeather, HourWeather, WeatherResponse } from './weather.models';
import { FrenchHoursSegments } from '../../utils/date/date.constants';

export async function getWeather() {
  let response = await axios.get(WEATHER_URL);
  return response.data;
}

export function getDays(weather: WeatherResponse): DayWeather[] {
  return weather.daily.map(day => {
    const date = new Date(day.dt * 1000);
    return {
      dt: day.dt,
      weekday: getWeekDay(date, true),
      month: getMonth(date),
      day: getDate(date)
    };
  });
}

export function getHours(weather: WeatherResponse, isToday: boolean): HourWeather[] {
  if (isToday) {
    return weather.hourly.map(hourly => {
      const date = new Date(hourly.dt * 1000);
      return {
        dt: hourly.dt,
        hour: `${date.getHours()}:00`,
        isSegment: false
      }
    });
  } else {
      return FrenchHoursSegments.map(segment => {
        return {
          ...segment,
          isSegment: true
        }
      });
  }
}
