function formatMilesToKilometers(miles: number): number {
  return Math.round(miles * 1.60934);
}

function convertSecondsToHours(seconds: number): number {
  return Math.round(seconds / 3600);
}

function getRemainingDaysAsText(dateInput: number): String {
  var date = new Date(dateInput);
  var today = new Date();

  var diff = date.getTime() - today.getTime();
  var diffInDays = Math.ceil(diff / (1000 * 3600 * 24));

  if (diffInDays > 365) {
    return "in " + Math.round(diff / (1000 * 3600 * 24 * 365)) + " years";
  } else if (diffInDays > 30) {
    return "in " + Math.round(diff / (1000 * 3600 * 24 * 30)) + " months";
  } else {
    return "in " + diffInDays.toString() + " days";
  }
}

function percentageOfYear(days: number) {
  return Math.round((days / 365) * 100);
}

export default {
  formatMilesToKilometers,
  convertSecondsToHours,
  getRemainingDaysAsText,
  percentageOfYear,
};
