const inpt = document.getElementById("input-box");
const output = document.getElementById("output");

inpt.addEventListener("keydown", () => db(3000));

var timeout;
const db = (time) => {
  debouncing(time);
};

const debouncing = (time) => {
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    printData();
  }, time);
};

const printData = () => {
  let html = `<div> Doubouncing content : ${inpt.value}</div>`;
  output.insertAdjacentHTML("beforeend", html);
};
