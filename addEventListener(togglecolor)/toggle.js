var button = document.querySelector("button");
// var isPurple = false;

// function handleBgColor() {
//   if (isPurple) {
//     document.body.style.background = "white";
//   } else {
//     document.body.style.background = "purple";
//   }
//   isPurple = !isPurple;
// }

// button.addEventListener("click", handleBgColor);

button.addEventListener("click", function() {
  document.body.classList.toggle("purple");
});
