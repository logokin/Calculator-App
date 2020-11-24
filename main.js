const btns = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const equal = document.querySelector(".btn-equal");
const clear = document.querySelector(".btn-clear");
const nagative = document.querySelector(".nagative");



  nagative.addEventListener("mouseover", (change) => {
    nagative.style.color = "red";
  });
 

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let number = btns[i].getAttribute("data-num");
    screen.value += number;
    screen.style.fontSize = "37px";
    screen.style.height = "80%";
  });
}

equal.addEventListener("click", function () {
  if (screen.value === "") {
    alert("please fill in some numbers");
  } else {
    let value = eval(screen.value);
    screen.value = value;
  }
});

clear.addEventListener("click", function () {
  screen.value = "";
});
