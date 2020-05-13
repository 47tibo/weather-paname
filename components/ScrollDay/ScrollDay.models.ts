import { DayWeather } from '../../api/weather/weather.models';
import { ViewToken } from 'react-native';

export type ScrollDayProps = {
  days: DayWeather[],
  onDayChange: (day: SelectedDay) => void
};

export type SelectedDay = {
  dt: number,
  isToday: boolean
};

export type ViewableItemsChangedInfo = {
  viewableItems: ViewToken[],
  changed: ViewToken[]
}

export type DayProps = {
  value: DayWeather
}
