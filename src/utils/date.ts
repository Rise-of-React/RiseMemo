import { Calender } from '../types/calender/calender';

const PLATE_ROW = 7;
const PLATE_COLUMNS = 6;

export const dateList = ['Sun', 'Mon', 'Thu', 'Wed', 'Thu', 'Fri', 'Sat'];

export const monthList = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * @param number The month number, 0 based
 * @param number The year, not zero based, required to account for leap years
 * @return {string} month name
 */
export function getCurrentMonthByDate(month: number, year: number) {
  const date = new Date(year, month, 1);
  return monthList[date.getMonth() - 1];
}

/**
 * @param number The month number, 0 based
 * @param number The year, not zero based, required to account for leap years
 * @return {Date} date which start day from month
 */
export function getFirstDay(month: number, year: number) {
  const date = new Date(year, month, 1);
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

/**
 * @param number The month number, 0 based
 * @param number The year, not zero based, required to account for leap years
 * @return {Date} date which last day from month
 */
export function getLastDay(month: number, year: number) {
  const date = new Date(year, month, 1);

  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

/**
 * @param Date The Date class
 * @return {string} The name of week which your day
 */
export function getNameOfDate(date: Date) {
  const weeks = ['Sun', 'Mon', 'Thu', 'Wed', 'Thu', 'Fri', 'Sat'];

  return weeks[date.getDay()];
}

/**
 * @param Date The Date class
 * @return {Date[]} Date List before yours current Month in Calender
 */
export function getBeforeMonthList(date: Date) {
  const length = date.getDay();
  const list = [];
  for (let i = 0; i < length; ++i) {
    list.push(new Date(date.getTime() - (i + 1) * (24 * 60 * 60 * 1000)));
  }
  return list;
}

/**
 * @param Date Date class
 * @return {Date[]} Date List after yours current Month in Calender
 */
export function getAfterMonthList(date: Date) {
  const list = [];
  for (let i = 0; i < 14; ++i) {
    list.push(new Date(date.getTime() + (i + 1) * (24 * 60 * 60 * 1000)));
  }
  return list;
}

/**
 * @param number month number, 0 based
 * @param number year, not zero based, required to account for leap years
 * @return {Date[]} List with date objects for each day of the month
 */
export function getCurrentMonthList(month: number, year: number) {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

/**
 * @param number month number, 0 based
 * @param number year, not zero based, required to account for leap years
 * @return {Date | undefined[][]} List with date objects for Calender Date
 */
export function getCalenderDateList(month: number, year: number) {
  const dateList: (Calender | undefined)[][] = Array.from(Array(PLATE_COLUMNS), () => Array(PLATE_ROW).fill(null));

  const firstDay = getFirstDay(month - 1, year);
  const lastDay = getLastDay(month - 1, year);

  const current = getCurrentMonthList(month - 1, year);
  const before = getBeforeMonthList(firstDay);
  const after = getAfterMonthList(lastDay);

  for (let i = 0; i < PLATE_COLUMNS; ++i) {
    for (let j = 0; j < PLATE_ROW; ++j) {
      if (before.length) {
        dateList[i][j] = { date: before.pop(), isCurrent: false };
      } else if (!current.length) {
        dateList[i][j] = { date: after.shift(), isCurrent: false };
      } else dateList[i][j] = { date: current.shift(), isCurrent: true };
    }
  }

  return dateList;
}
