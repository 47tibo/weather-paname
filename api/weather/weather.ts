import axios from 'axios';
import { WEATHER_URL } from '../api.constants';
import { getDate, getMonth, getWeekDay, isSameDay } from '../../utils/date/date.utils';
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
    // weather api returns hours for the next 3 days, we only want today
    const hours = weather.hourly;
    const today = new Date(hours[0].dt * 1000);
    const todayHours = hours.filter(hour =>
      isSameDay(today, new Date(hour.dt * 1000))
    );
    return todayHours.map(hour => {
      const date = new Date(hour.dt * 1000);
      return {
        dt: hour.dt,
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
