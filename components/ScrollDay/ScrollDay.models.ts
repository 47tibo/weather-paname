import { DayWeather } from '../../api/weather/weather.models';

export type ScrollDayProps = {
  days: DayWeather[],
  onDayChange: (day: SelectedDay) => void
};

export type SelectedDay = {
  dt: number,
  isToday: boolean
};
