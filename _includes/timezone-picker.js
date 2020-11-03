var dateDiff = function(day, time, timezone) {
  const utcDay = moment.utc(`${day} ${time}:00`).date();
  const tzDay = moment.utc(`${day} ${time}:00`).tz(timezone).date();

  return tzDay - utcDay;
};

var localize = function(day, time, timezone) {
  const diff = dateDiff(day, time, timezone);
  const newTime = moment.utc(`${day} ${time}:00`).tz(timezone).format('HH:mm')
  if (diff > 0) {
    return `(+${diff} day) ${newTime}`
  } else if (diff < 0){
    return `(-${Math.abs(diff)} day) ${newTime}`
  }
  return newTime;
};

var rememberTimezone = function(timezone) {
  Cookies.set('pydata_schedule_timezone', timezone, { expires: 90, sameSite: 'strict' });
}

var recallTimezone = function() {
  return Cookies.get('pydata_schedule_timezone')
}

var updateTimezone = function(newTimezone) {
  // Localize every row in the schedule
  $(".schedule-global tbody tr td:first-child span").each(function(index) {
    const day = `2020-11-${$(this).attr("day")}`
    const utcTime = $(this).attr("time");
    const rx = /[0-2][0-9]:[0-5][0-9]/g;
    const newText = utcTime.replace(rx, t => localize(day, t, newTimezone));
    $(this).text(newText);
  });


  // Add timezone to header
  const shortTimezone = newTimezone.split('/').slice(-1).pop().replace('_', ' ');
  $(".schedule-global thead tr th:first-child").each(function(index) {
    $(this).text(`Time (${shortTimezone})`);
  });

  rememberTimezone(newTimezone);
}

const timezone = moment.tz.names();
const picker = $('#timezone-picker');
for (var i = 0; i < timezone.length; i++) {
  picker.append('<option value="' + timezone[i] + '">' + timezone[i] + '</option>');
}
const previousTZ = recallTimezone() || "UTC";
if (typeof previousTZ !== "undefined") {
  updateTimezone(previousTZ);
  picker.val(previousTZ);
}
