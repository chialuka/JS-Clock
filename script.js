window.onload= setTimeout(getTime, 100);;

function getTime() {

  let timer = new Date();

  const hourHand = document.querySelector(".hourhand");
  const minuteHand = document.querySelector(".minutehand");
  const secondHand = document.querySelector(".secondhand");
  let hourT = timer.getHours();
  let minuteT = timer.getMinutes();
  let secondT = timer.getSeconds();
  let trH = (hourT>= 12) ? (((hourT - 12) / 12 * 360) + 180):((hourT / 12 * 360) + 180)
  let trM = (((minuteT/60) * 360) + 180);
  let trS = (((secondT/60) * 360) + 180);
  hourHand.style.transform = "rotate(" + trH + "deg)";
  minuteHand.style.transform = "rotate(" + trM + "deg)";
  secondHand.style.transform = "rotate(" + trS + "deg)";
  nowTime = document.querySelector(".clock-face").innerHTML;
    setTimeout(getTime, 1000);
  }
getTime();

