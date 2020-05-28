import axios from 'axios';
import { WEATHER_URL } from '../api.constants';
import { getDate, getMonth, getWeekDay, isSameDay } from '../../utils/date/date.utils';
import { DayWeather, HourlyWeather, HourWeather, WeatherResponse } from './weather.models';
import { FrenchHoursSegments } from '../../utils/date/date.constants';
import { SelectedDay } from '../../components/ScrollDay/ScrollDay.models';
import { HourSegment } from './weather.constants';

export async function getWeather() {
  let response = await axios.get(WEATHER_URL);
  return response.data;
}

export function getDays(weather: WeatherResponse | null): DayWeather[] {
  if (weather) {
    return weather.daily.map(day => {
      const date = new Date(day.dt * 1000);
      return {
        dt: day.dt,
        weekday: getWeekDay(date, true),
        month: getMonth(date),
        day: getDate(date)
      };
    });
  } else {
    return [];
  }
}

export function getHours(weather: WeatherResponse | null, isToday = true): HourWeather[] {
  if (weather) {
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
  } else {
    return [];
  }
}

export function getCurrentWeather(currentDay: SelectedDay | null,
                                  currentHour: HourWeather | null,
                                  weather: WeatherResponse | null): HourlyWeather | null
{
  if (currentDay && currentHour && weather) {
    if (!currentHour.isSegment) { // today
      const hourlyWeather = weather.hourly.find(hour => hour.dt === currentHour.dt);
      return hourlyWeather || null;
    } else {
      const day = weather.daily.find(day => day.dt === currentDay.dt);
      if (day) {
        const {
          uvi,
          sunset,
          sunrise,
          ...tempWeather
        } = day;
        const hourlyWeather: any = tempWeather;
        const segment = HourSegment[currentHour.dt];
        hourlyWeather.feels_like = hourlyWeather.feels_like[segment];
        hourlyWeather.temp = hourlyWeather.temp[segment];
        return hourlyWeather;
      } else {
        return null;
      }
    }
  } else {
    return null;
  }
}
