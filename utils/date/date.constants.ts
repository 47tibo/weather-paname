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
    segment: HourSegment.morning,
    hour: 'Matin'
  },
  {
    segment: HourSegment.day,
    hour: 'Midi'
  },
  {
    segment: HourSegment.eve,
    hour: 'Soirée'
  },
  {
    segment: HourSegment.night,
    hour: 'Nuit'
  }
];
