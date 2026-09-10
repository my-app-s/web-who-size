document.addEventListener("DOMContentLoaded", function() {
    const div = document.querySelector(".div-for-size");
    const widthSlider = document.querySelector("#range-width");
    const heightSlider = document.querySelector("#range-height");
    const textWidth = document.querySelector("#text-width");
    const textHeight = document.querySelector("#text-height");
    const widthDisplay = document.querySelector(".div-for-size-width");
    const heightDisplay = document.querySelector(".div-for-size-height");
    const updateButton = document.querySelector("#update-button");

    function applySize(w, h) {
        const widthValue = w + "px";
        const heightValue = h + "px";

        div.style.width = widthValue;
        div.style.height = heightValue;

        widthDisplay.textContent = "Width: " + widthValue;
        heightDisplay.textContent = "Height: " + heightValue;

        // Синхронизируем инпуты и слайдеры между собой
        widthSlider.value = w;
        heightSlider.value = h;
        textWidth.value = w;
        textHeight.value = h;
    }

    // Инициализация при загрузке стартовыми значениями
    applySize(widthSlider.value, heightSlider.value);

    // События слайдеров (реальное время)
    widthSlider.addEventListener("input", () => applySize(widthSlider.value, heightSlider.value));
    heightSlider.addEventListener("input", () => applySize(widthSlider.value, heightSlider.value));

    // Обновление по кнопке из текстовых полей
    updateButton.addEventListener("click", () => {
        const w = parseInt(textWidth.value) || 100;
        const h = parseInt(textHeight.value) || 100;
        applySize(w, h);
    });
});

// Загрузка фона
document.getElementById("background-upload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.body.style.backgroundImage = `url('${e.target.result}')`;
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
        };
        reader.readAsDataURL(file);
    }
});

// Перемещение элемента мышей
const draggableDiv = document.getElementById("div-size");

let offsetX, offsetY, isDragging = false;

draggableDiv.addEventListener("mousedown", (event) => {
    isDragging = true;
    offsetX = event.clientX - draggableDiv.getBoundingClientRect().left;
    offsetY = event.clientY - draggableDiv.getBoundingClientRect().top;
    draggableDiv.style.cursor = "grabbing";
    draggableDiv.style.transition = "none";
});

document.addEventListener("mousemove", (event) => {
    if (isDragging) {
        draggableDiv.style.position = "absolute";
        draggableDiv.style.left = (event.clientX - offsetX) + "px";
        draggableDiv.style.top = (event.clientY - offsetY) + "px";
    }
});

document.addEventListener("mouseup", () => {
    if (isDragging) {
        isDragging = false;
        draggableDiv.style.cursor = "grab";
        draggableDiv.style.transition = "top 0.2s ease, left 0.2s ease";
    }
});