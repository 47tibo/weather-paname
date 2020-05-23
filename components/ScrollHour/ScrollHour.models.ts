import { HourWeather } from '../../api/weather/weather.models';

export type ScrollHourProps = {
  hours: HourWeather[],
  onHourChange: (hour: HourWeather) => void
}
