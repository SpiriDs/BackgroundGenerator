var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var section = document.getElementById("gradientSection");

var shape = document.querySelector(".shape");

var radialSelection = document.getElementById("radialShape");
var radialType = document.querySelector(".radialType");

var linearSelection = document.getElementById("linearSelection");
var linearDirection = document.querySelector(".linearDirection");

var repeat = document.getElementById("repeat");

color1.value = "#ff0000";
color2.value = "#ffff00";
type = "";

console.log(repeat.checked);

function setGradient() {
  if (repeat.checked) {
    console.log(repeat.value);
    if (shape.value === "radial") {
      body.style.background =
        repeat.value +
        "-" +
        shape.value +
        "-gradient(" +
        radialType.value +
        ", " +
        color1.value +
        ", " +
        color2.value +
        ")";

      section.style.background =
        repeat.value +
        "-" +
        shape.value +
        "-gradient(" +
        radialType.value +
        ", " +
        color1.value +
        ", " +
        color2.value +
        ")";

      css.textContent = body.style.background + ";";
    } else {
      body.style.background =
        repeat.value +
        "-" +
        shape.value +
        "-gradient(" +
        linearDirection.value +
        ", " +
        color1.value +
        ", " +
        color2.value +
        ")";

      section.style.background =
        repeat.value +
        "-" +
        shape.value +
        "-gradient(" +
        linearDirection.value +
        ", " +
        color1.value +
        ", " +
        color2.value +
        ")";

      css.textContent = body.style.background + ";";
    }
  } else {
    if (shape.value === "radial") {
      body.style.background =
        shape.value +
        "-gradient(" +
        radialType.value +
        ", " +
        color1.value +
        ", " +
        color2.value +
        ")";

      section.style.background =
        shape.value +
        "-gradient(" +
        radialType.value +
        ", " +
        color1.value +
        ", " +
        color2.value +
        ")";

      css.textContent = body.style.background + ";";
    } else {
      body.style.background =
        shape.value +
        "-gradient(" +
        linearDirection.value +
        ", " +
        color1.value +
        ", " +
        color2.value +
        ")";

      section.style.background =
        shape.value +
        "-gradient(" +
        linearDirection.value +
        ", " +
        color1.value +
        ", " +
        color2.value +
        ")";

      css.textContent = body.style.background + ";";
    }
  }
}

function setradialShape() {
  radialSelection.classList.toggle("visible");
}

function setLinearSelection() {
  linearSelection.classList.toggle("visible");
}

function setShape() {
  type = shape.value;
  return type;
}

shape.addEventListener("input", setGradient);
shape.addEventListener("input", setradialShape);
shape.addEventListener("input", setLinearSelection);
radialType.addEventListener("input", setGradient);
linearDirection.addEventListener("input", setGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
