import { HourSegment } from '../api/weather/weather.constants';

enum Hour {
  _0 = 4,
  _1,
  _2,
  _3,
  _4,
}

export const HourIconEnum = {...HourSegment, ...Hour};
export type HourIconEnum = typeof HourIconEnum;
