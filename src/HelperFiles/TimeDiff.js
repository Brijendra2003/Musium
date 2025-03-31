// let strt = "10:00";
// let end = "12:30";

export default function TimeDiff(strt, end) {
  let st = strt.split(":").map(Number);
  let et = end.split(":").map(Number);

  let hour = et[0] - st[0];
  let minut = et[1] - st[1];

  if (minut < 0) {
    hour -= 1; // Borrow 1 hour
    minut += 60; // Convert negative minutes to positive
  }

  let totalHours = hour + minut / 60;

  return totalHours;
}

