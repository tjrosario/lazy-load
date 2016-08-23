;
equisolve.utilities = equisolve.utilities || {};

/**
 * Date string conversion utility to human readable format
 *
 * takes YYYY-MM-DD HH:MM:SS  returns MM/DD/YYYY 12:00 AM
 * @method dateFormat
 */
equisolve.utilities.dateFormat = function(dateTimeString) {
  var localDateTime = dateTimeString;
  if (!localDateTime) { return ''; }
  if (localDateTime.match(/1969-12-31/)) { return ''; }
  var dateTime = localDateTime.split(" ");
  var theDate = dateTime[0];
  var theTime = dateTime[1];
  var dateRay = theDate.split("-");
  var dateString = dateRay[1] + "/" + dateRay[2] + "/" + dateRay[0];
  if (theTime) {
    theTime = theTime.slice(0,5);
    var timeRay = theTime.split(":");
    var theHour = timeRay[0];
    var theMin = timeRay[1];
    var mString;
    if (theHour > 12) { mString = "PM"; theHour -= 12; } else { mString = "AM"; }
    if (theHour == 00) { theHour = 12; }
    dateString += (" " + theHour+":"+theMin + " " + mString);
  }
  return dateString;
};
