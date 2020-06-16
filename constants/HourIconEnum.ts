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
  _9,
  _10,
  _11,
  _12,
  _13,
  _14,
  _15,
  _16,
  _17,
  _18,
  _19,
  _20,
  _21,
  _22,
  _23
}

export const HourIconEnum = {...HourSegment, ...Hour};
export type HourIconEnum = typeof HourIconEnum;