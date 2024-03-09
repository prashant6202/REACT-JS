function incrementCounter() {
  let count = localStorage.getItem("counter");
  count = Number(count) + 1;
  let h2 = document.querySelector("h2");
  h2.innerHTML = "Count: " + count;
  localStorage.setItem("counter", String(count));
}

function resetCounter() {
  localStorage.clear();
  document.querySelector("h2").innerHTML = "count:0";
}

function init() {
  let count = localStorage.getItem("conter");
  count = Number(count);
  document.querySelector("h2").innerHTML = "count: " + count;
}
window.onload = init;
