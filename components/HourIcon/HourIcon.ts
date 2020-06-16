import {HourWeather} from '../../api/weather/weather.models';
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
import {HourEnum} from "../../constants/HourIconEnum";

export class HourIcon {
  private static instance: HourIcon;

  private _hourEnums = new Map<any, FunctionComponent>([
    [HourEnum._0, _0],
    [HourEnum._1, _0],
    [HourEnum._2, _0],
    [HourEnum._3, _0],
    [HourEnum._4, _4],
    [HourEnum._5, _5],
    [HourEnum._6, _6],
    [HourEnum._7, _7],
    [HourEnum._8, _8],
    [HourEnum._9, _9],
    [HourEnum._10, _10],
    [HourEnum._11, _11],
    [HourEnum._12, _12],
    [HourEnum._13, _13],
    [HourEnum._14, _14],
    [HourEnum._15, _15],
    [HourEnum._16, _16],
    [HourEnum._17, _17],
    [HourEnum._18, _18],
    [HourEnum._19, _19],
    [HourEnum._20, _20],
    [HourEnum._21, _21],
    [HourEnum._22, _22],
    [HourEnum._23, _23]
  ]);
  private _hourSegments = new Map<any, FunctionComponent>([
    [HourSegment.morn, _7],
    [HourSegment.day, _12],
    [HourSegment.eve, _19],
    [HourSegment.night, _23],
  ]);

  public static get(hour: HourWeather): FunctionComponent | null {
    if (!HourIcon.instance) {
      HourIcon.instance = new HourIcon();
    }

    let icon;
    if (hour.isSegment) {
      icon = HourIcon.instance._hourSegments.get(hour.dt as HourSegment);
    } else {
      icon = HourIcon.instance._hourEnums.get(`_${hour.hour.replace(':00', '')}`);
    }
    return icon || null;
  }
}
