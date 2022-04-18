import moment from "moment";

/**
 *
 * @param {MongoDBdateString} time
 * @returns {Number}
 */
export const getDifferenceInHoursFromPresent = (time) =>
  Math.floor(Math.abs(Number(new Date()) - moment(time)._d.getTime()) / 36e5);
