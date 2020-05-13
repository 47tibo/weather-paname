import { HourWeather } from '../../api/weather/weather.models';
import { HourSegment } from '../../api/weather/weather.constants';

export type ScrollHourProps = {
  hours: HourWeather[],
  onHourChange: (hour: SelectedHour) => void
}

export type SelectedHour = {
  dt?: number,
  segment?: HourSegment,
  hour: string
}
