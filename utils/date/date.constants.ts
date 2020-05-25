import { HourSegment } from '../../api/weather/weather.constants';

export enum FrenchDays {
  'dimanche',
  'lundi',
  'mardi',
  'mercredi',
  'jeudi',
  'vendredi',
  'samedi'
}

export enum FrenchMonths {
  'janvier',
  'février',
  'mars',
  'avril',
  'mai',
  'juin',
  'juillet',
  'août',
  'septembre',
  'octobre',
  'novembre',
  'décembre'
}

export const FrenchHoursSegments = [
  {
    dt: HourSegment.morn,
    hour: 'Matin'
  },
  {
    dt: HourSegment.day,
    hour: 'Midi'
  },
  {
    dt: HourSegment.eve,
    hour: 'Soirée'
  },
  {
    dt: HourSegment.night,
    hour: 'Nuit'
  }
];
