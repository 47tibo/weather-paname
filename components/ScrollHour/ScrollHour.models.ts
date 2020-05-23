import { HourWeather } from '../../api/weather/weather.models';
import { SelectedDay } from '../ScrollDay/ScrollDay.models';

export type ScrollHourProps = {
  day: SelectedDay | null,
  hours: HourWeather[],
  onHourChange: (hour: HourWeather) => void
}
