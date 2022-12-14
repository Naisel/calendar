const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date();
let today = date.getDate();
let todayMonth = date.getMonth();
let todayYear = date.getFullYear();
let currYear = todayYear;
let currMonth = todayMonth;

const months = [
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
  "December",
];

const renderCalender = () => {
  let lastDate = new Date(currYear, currMonth + 1, 0);
  let firstDate = new Date(currYear, currMonth, 1);
  let lastDateofMonth = lastDate.getDate();
  let firstDayofMonth = firstDate.getDay();

  let lastDayofMonth = lastDate.getDay();
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
  let liTag = "";
  let i = 0;
  console.log(lastDateofLastMonth);
  console.log(lastDateofMonth);
  for (i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
  }
  for (i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === today && currMonth === todayMonth && currYear === todayYear
        ? "active"
        : "";
    liTag += `<li class=${isToday}>${i}</li>`;
  }
  for (i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
};

renderCalender();

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    console.log(currYear);
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
      console.log("here" + date);
    } else {
      date = new Date();
      console.log("there" + date);
    }
    console.log("last" + date);
    renderCalender();
  });
});
