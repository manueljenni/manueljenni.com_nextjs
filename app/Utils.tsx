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

function getCurrentTimeEmoji(date: Date) {
  var hour = date.getHours();
  if (hour >= 6 && hour < 12) {
    return "☕️";
  } else if (hour >= 12 && hour < 18) {
    return "🏙️";
  } else if (hour >= 18 && hour < 24) {
    return "🌌";
  } else if (hour >= 0 && hour < 6) {
    return "💤";
  }
}

function parseDate(input_date: string) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var date = new Date(input_date);
  return monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
}

function getDepartureArrivalTime(start_date: string, end_date: string) {
  var start = new Date(start_date);
  var end = new Date(end_date);

  var startDate = new Date(start).setHours(0, 0, 0, 0);
  var endDate = new Date(end).setHours(0, 0, 0, 0);

  if (startDate < endDate) {
    // Overnight flight
    return (
      <span>
        {getHoursOfDateFormatted(start)} - {getHoursOfDateFormatted(end)}
        <sup>+1</sup>
      </span>
    );
  } else {
    return getHoursOfDateFormatted(start) + " - " + getHoursOfDateFormatted(end);
  }
}

function getHoursOfDateFormatted(date: Date) {
  return (
    date.getHours().toString().padStart(2, "0") +
    ":" +
    date.getMinutes().toString().padStart(2, "0")
  );
}

export default {
  formatMilesToKilometers,
  convertSecondsToHours,
  getRemainingDaysAsText,
  percentageOfYear,
  getCurrentTimeEmoji,
  parseDate,
  getDepartureArrivalTime,
};
