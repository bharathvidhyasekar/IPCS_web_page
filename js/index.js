function show() {
  var x = document.getElementById("show").innerHTML;
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}