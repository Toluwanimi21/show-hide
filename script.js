// function myFunction() {
//   var x = document.getElementById("container");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

let btn = document.getElementById("btn");
let form = document.getElementById("form");

btn.addEventListener("click", function () {
  if (form.style.display === "none") {
    form.style.display = "block";
    btn.textContent = "Hide Sign Up Form";
  } else {
    form.style.display = "none";
    btn.textContent = "Show Sign Up Form";
  }
});