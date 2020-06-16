import { HourWeather } from '../../api/weather/weather.models';
import { HourIconEnum } from '../../constants/HourIconEnum';
import { HourSegment } from '../../api/weather/weather.constants';
import  _0  from './_0';
import { FunctionComponent } from 'react';
import _4 from './_4';
import _6 from './_6';

export class HourIcon {
  private static instance: HourIcon;

  private _icons = new Map<any, FunctionComponent>([
    [HourIconEnum._0, _0],
    [HourIconEnum._1, _0],
    [HourIconEnum._2, _0],
    [HourIconEnum._3, _0],
    [HourIconEnum._4, _4],
    [HourIconEnum.night, _6],
  ]);

  public static get(hour: HourWeather): FunctionComponent | null {
    if (!HourIcon.instance) {
      HourIcon.instance = new HourIcon();
    }

    let icon;
    if (hour.isSegment) {
      icon = HourIcon.instance._icons.get(hour.dt as HourSegment);
    } else {
      icon = HourIcon.instance._icons.get(`_${hour.hour.replace(':00', '')}`);
    }
    return icon || null;
  }
}
