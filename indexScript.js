const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".icons span");

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

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
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

  let liTag = "";
  let i = 0;
  firstDayofMonth = firstDayofMonth % 6;
  console.log(lastDateofLastMonth);
  console.log(firstDayofMonth);
  for (
    i = lastDateofLastMonth - firstDayofMonth + 1;
    i <= lastDateofLastMonth;
    i++
  ) {
    liTag += `<li class="inactive">${i}</li>`;
  }
  for (i = 1; i <= lastDateofMonth; i++) {
    liTag += `<li>${i}</li>`;
  }
  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
};

renderCalender();
let firstDay = new Date(currYear, currMonth, 1);
let lastDay = new Date(currYear, currMonth + 1, 0);
console.log(months[currMonth]);
console.log(lastDay.getDate());

prevNextIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    renderCalender();
    console.log(icon);
  });
});
