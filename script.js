var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
/* var body = document.getElementById("gradient"); */
var section = document.getElementById("gradientSection");

/* Auswahl Linear oder Radial */
var shape = document.querySelector(".shape");
/* Auswahl Form Radial */
var radialSelection = document.getElementById("radialShape");
var radialType = document.querySelector(".radialType");
/* Auswahl Richtung linear */
var linearSelection = document.getElementById("linearSelection");
var linearDirection = document.querySelector(".linearDirection");
/* Repeat */
var repeat = document.getElementById("repeat");
/* percent color */
var percentColor1 = document.getElementById("color1Percent");
var percentColor2 = document.getElementById("color2Percent");



color1.value = "#ff0000";
color2.value = "#ffff00";

function setGradient() {
  if (repeat.checked) {

    if (shape.value === "radial") {
      section.style.background =
        repeat.value +
        "-" +
        shape.value +
        "-gradient(" +
        radialType.value +
        ", " +
        color1.value + " " + percentColor1.value +
        "%, " +
        color2.value + " " + percentColor2.value +
        "%)";

      css.textContent = section.style.background + ";";
    } else {
      section.style.background =
        repeat.value +
        "-" +
        shape.value +
        "-gradient(" +
        linearDirection.value +
        ", " +
        color1.value + " " + percentColor1.value +
        "%, " +
        color2.value + " " + percentColor2.value +
        "%)";

      css.textContent = section.style.background + ";";
    }
  } else {
    if (shape.value === "radial") {
      section.style.background =
        repeat.value +
        "-" +
        shape.value +
        "-gradient(" +
        radialType.value +
        ", " +
        color1.value + " " + percentColor1.value +
        "%, " +
        color2.value + " " + percentColor2.value +
        "%)";

      css.textContent = section.style.background + ";";

    } else {
      section.style.background =
        repeat.value +
        "-" +
        shape.value +
        "-gradient(" +
        linearDirection.value +
        ", " +
        color1.value + " " + percentColor1.value +
        "%," +
        color2.value + " " + percentColor2.value +
        "%)";

      css.textContent = section.style.background + ";";

    }
  }
}
/* Functions Visibility GradientType */
function setradialShape() {
  radialSelection.classList.toggle("visible");
}

function setLinearSelection() {
  linearSelection.classList.toggle("visible");
}

/* EventListener Color Picker */
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
/* EventListener Input Percentage */
percentColor1.addEventListener("input", setGradient);
percentColor2.addEventListener("input", setGradient);
/* EventListener Shape Select */
shape.addEventListener("input", setGradient);
shape.addEventListener("input", setradialShape);
shape.addEventListener("input", setLinearSelection);
/* EventListener GradientType */
radialType.addEventListener("input", setGradient);
linearDirection.addEventListener("input", setGradient);
/* EventListener Repeat Check-Box */
repeat.addEventListener("input", setGradient);