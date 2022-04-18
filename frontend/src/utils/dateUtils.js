import moment from "moment";

/**
 *
 * @param {MongoDBdateString} time
 * @returns {Number}
 */

export const getDifferenceInHoursFromPresent = (time) =>
  Math.floor(Math.abs(Number(new Date()) - moment(time)._d.getTime()) / 36e5);

export const getDifferenceInDaysFromPresent = (time) =>
  Math.floor(
    Math.abs(Number(new Date()) - moment(time)._d.getTime()) / (24 * 36e5)
  );

export const getDifferenceInWeeksFromPresent = (time) =>
  Math.floor(
    Math.abs(Number(new Date()) - moment(time)._d.getTime()) / (7 * 24 * 36e5)
  );

export const getDifferenceInMonthsFromPresent = (time) =>
  Math.floor(
    Math.abs(Number(new Date()) - moment(time)._d.getTime()) / (30 * 24 * 36e5)
  );

const DATE_SCALE_ENUM = {
  Hours: getDifferenceInHoursFromPresent,
  Days: getDifferenceInDaysFromPresent,
  Weeks: getDifferenceInWeeksFromPresent,
  Months: getDifferenceInMonthsFromPresent,
};

export const getAppropriateUnitMagnitude = (time) =>
  Object.values(DATE_SCALE_ENUM)
    .filter((elem) => elem(time) !== 0)
    .pop()(time);
export const getAppropriateUnit = (time) =>
  Object.keys(DATE_SCALE_ENUM)[
    Object.values(DATE_SCALE_ENUM).filter((elem) => elem(time) !== 0).length - 1
  ];

export const timeDifferenceInAppropriateUnit = (time) => {
  console.log(getAppropriateUnit(time));
  return {
    magnitude: getAppropriateUnitMagnitude(time),
    unit:
      getAppropriateUnitMagnitude(time) !== 1
        ? getAppropriateUnit(time)
        : getAppropriateUnit(time).slice(0, -1),
  };
};
