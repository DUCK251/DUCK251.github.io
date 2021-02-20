const h1 = document.querySelector("h1");

function getTime() {
  const today = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" })
  );
  let Hours = today.getHours();
  let Minutes = today.getMinutes();
  let Seconds = today.getSeconds();
  Hours = Hours < 10 ? "0"+Hours : Hours;
  Minutes = Minutes < 10 ? "0"+Minutes : Minutes;
  Seconds = Seconds < 10 ? "0"+Seconds : Seconds;
  h1.innerText = `${Hours}:${Minutes}:${Seconds}`;
}

function clockInit() {
  getTime();
  setInterval(getTime, 1000);
}
clockInit();