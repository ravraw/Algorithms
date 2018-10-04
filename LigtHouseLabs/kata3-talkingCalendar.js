// Kata3- talkingCalendar

var talkingCalendar = function(date) {
  // ADD MONTHS IN AN ARRAY.
  const months = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );

  const dayName = dayNumber => {
    if (dayNumber === "01" || dayNumber === "21" || dayNumber === "31") {
      return `${+dayNumber}st`;
    } else if (dayNumber == "02" || dayNumber === "22") {
      return `${+dayNumber}nd`;
    } else if (dayNumber === "03" || dayNumber === "23") {
      return `${+dayNumber}rd`;
    } else {
      return `${+dayNumber}th`;
    }
  };

  const dateArray = date.split("/");
  let year = dateArray[0];
  let month = months[dateArray[1] - 1];
  let day = dayName(dateArray[2]);
  return `${month} ${day},${year}`;
};

console.log(talkingCalendar("2017/12/02")); //December 2nd, 2017
console.log(talkingCalendar("2017/12/03")); //December 3rd, 2017
console.log(talkingCalendar("2007/11/11")); //November 11th, 2007
console.log(talkingCalendar("2007/11/21")); //November 21st, 2007
console.log(talkingCalendar("1987/08/24")); //August 24th, 1987
