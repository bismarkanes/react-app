const moment = require('moment');

export const getStartDateOfThisMonth = () => {
  return new moment().startOf('month').format('YYYY-MM-DD');
};

export const getEndDateOfThisMonth = () => {
  return new moment().endOf('month').format('YYYY-MM-DD');
};

export const getStartDateOfLastMonth = () => {
  return new moment().subtract(1, 'month').startOf('month').format('YYYY-MM-DD');
};

export const getEndDateOfLastMonth = () => {
  return new moment().subtract(1, 'month').endOf('month').format('YYYY-MM-DD');
};

export const getStartDateOfMonth = (year, month) => {
  return new moment([year, month - 1]).startOf('month').format('YYYY-MM-DD');
};

export const getEndDateOfMonth = (year, month) => {
  return new moment([year, month - 1]).endOf('month').format('YYYY-MM-DD');
};


export const getStartDateOfThisYear = () => {
  return new moment().startOf('year').format('YYYY-MM-DD');
};

export const getEndDateOfThisYear = () => {
  return new moment().endOf('year').format('YYYY-MM-DD');
};

export const getDateNow = () => {
  return moment().format('YYYY-MM-DD');
};

export const getLastYearFromNow = () => {
  return moment().subtract(1, 'year').format('YYYY-MM-DD');
};

export const getMonthNow = () => {
  return moment().month() + 1;
};

export const getYearNow = () => {
  return moment().year();
};

export const getMonth = (date) => {
  const check = moment(date, 'YYYY-MM-DD');
  return check.format('M');
};

export const getMonthName = (month) => {
  return moment(month, 'MM').format('MMMM');
};

export const getStartDateOfLastFiveMonth = () => {
  return new moment().subtract(5, 'month').startOf('month').format('YYYY-MM-DD');
};

export const getEndDateOfNextTwoMonth = () => {
  return new moment().add(2, 'month').endOf('month').format('YYYY-MM-DD');
};

export const getLastFiveDay = () => {
  return new moment().subtract(5, 'days').format('YYYY-MM-DD');
};

export const getNextTwoDay = () => {
  return new moment().add(2, 'days').format('YYYY-MM-DD');
};