const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const stringDate = document.querySelector(".string-date");

function setDate() {
  const now = new Date();
  const getSeconds = now.getSeconds();
  const getMinutes = now.getMinutes();
  const getHours = now.getHours();

  const secondDegree = (getSeconds / 60) * 360;
  const minuteDegree = (getMinutes / 60) * 360;
  const hourDegree = (getHours / 12) * 360;

  second.style.transform = `rotate(${secondDegree}deg)`;
  second.style.transition = "all .5s";
  minute.style.transform = `rotate(${minuteDegree}deg)`;
  hour.style.transform = `rotate(${hourDegree}deg)`;
  stringDate.innerHTML = now.toDateString();
  const hourChar = document.querySelector(".time-counter.hour");
  const minuteChar = document.querySelector(".time-counter.minute");
  const secondChar = document.querySelector(".time-counter.second");
  hourChar.innerHTML = getHours + " :";
  minuteChar.innerHTML = getMinutes + " :";

  if (secondChar.innerHTML !== getSeconds + "") {
    secondChar.classList.add("change");
  }
  const secondAnimation = document.querySelector(".time-counter.second");
  secondAnimation.addEventListener("animationend", (e) => {
    e.preventDefault();
    secondChar.classList.remove("change");
  });

  if (getSeconds < 10) {
    secondChar.innerHTML = "0" + getSeconds;
  } else {
    secondChar.innerHTML = getSeconds + "";
  }
}
setInterval(setDate, 1000);
