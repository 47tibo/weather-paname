import { HourSegment } from '../api/weather/weather.constants';

enum Hour {
  _0 = 4,
  _1,
  _2,
  _3,
  _4,
  _5,
  _6,
  _7,
  _8,
}

export const HourIconEnum = {...HourSegment, ...Hour};
export type HourIconEnum = typeof HourIconEnum;
