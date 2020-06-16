import {HourWeather} from '../../api/weather/weather.models';
import {HourIconEnum} from '../../constants/HourIconEnum';
import {HourSegment} from '../../api/weather/weather.constants';
import _0 from './_0';
import {FunctionComponent} from 'react';
import _4 from './_4';
import _6 from './_6';
import _8 from "./_8";
import _7 from "./_7";
import _5 from "./_5";
import _9 from "./_9";
import _10 from "./_10";
import _11 from "./_11";
import _12 from "./_12";
import _13 from "./_13";
import _14 from "./_14";
import _15 from "./_15";
import _16 from "./_16";
import _17 from "./_17";
import _18 from "./_18";
import _19 from "./_19";
import _20 from "./_20";
import _21 from "./_21";
import _22 from "./_22";
import _23 from "./_23";

export class HourIcon {
  private static instance: HourIcon;

  private _icons = new Map<any, FunctionComponent>([
    [HourIconEnum._0, _0],
    [HourIconEnum._1, _0],
    [HourIconEnum._2, _0],
    [HourIconEnum._3, _0],
    [HourIconEnum._4, _4],
    [HourIconEnum._5, _5],
    [HourIconEnum._6, _6],
    [HourIconEnum._7, _7],
    [HourIconEnum._8, _8],
    [HourIconEnum._9, _9],
    [HourIconEnum._10, _10],
    [HourIconEnum._11, _11],
    [HourIconEnum._12, _12],
    [HourIconEnum._13, _13],
    [HourIconEnum._14, _14],
    [HourIconEnum._15, _15],
    [HourIconEnum._16, _16],
    [HourIconEnum._17, _17],
    [HourIconEnum._18, _18],
    [HourIconEnum._19, _19],
    [HourIconEnum._20, _20],
    [HourIconEnum._21, _21],
    [HourIconEnum._22, _22],
    [HourIconEnum._23, _23],
    [HourIconEnum.morn, _7],
    [HourIconEnum.day, _12],
    [HourIconEnum.eve, _19],
    [HourIconEnum.night, _23],
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
