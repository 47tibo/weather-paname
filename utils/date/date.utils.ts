import { FrenchDays, FrenchMonths } from './date.constants';
import { capitalize } from '../string.utils';

export function getWeekDay(date: Date, isCapitalized = false): string {
  let weekday = FrenchDays[date.getDay()];
  if (isCapitalized) {
    weekday = capitalize(weekday);
  }
  return weekday;
}

export function getMonth(date: Date, isCapitalized = false): string {
  let month = FrenchMonths[date.getMonth()];
  if (isCapitalized) {
    month = capitalize(month);
  }
  return month;
}

export function getDate(date: Date): string {
  return date.getDate().toString();
}

export function isSameDay(date1: Date, date2: Date): boolean {
  return date1.getDate() === date2.getDate();
}
