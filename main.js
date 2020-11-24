const pricingBox = document.querySelectorAll(".pricing-plan");
const pricingButton = document.querySelectorAll(".btn");
let highlightedPricingBorder = false;

pricingButton.forEach((elem) => {
  elem.addEventListener("click", function clickButton(button) {
    cleanPricingBoxBorders();
    pricingBox[elem.id].style.cssText = "border: 5px solid black;";
  });
});

function cleanPricingBoxBorders() {
  for (var i = 0; i < pricingBox.length; i++) {
    pricingBox[i].style.cssText = "border: 2px solid #57c729;";
  }
}
