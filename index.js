const slider = document.getElementById("numberSlider");
const numberValue = document.getElementById("numberValue");

slider.addEventListener("input", function() {
    numberValue.textContent = slider.value;
});
