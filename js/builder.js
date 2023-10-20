const sliderG = document.getElementById("sliderG");
const sliderN = document.getElementById("sliderN");
const inputBaseValue = document.getElementById("lvl");
const lvlInput = document.getElementById("lvl");
const valueElement = document.getElementById("valueHp");

document.querySelector(".slider-container1").addEventListener("click", function() {
    if (sliderG.style.left === "0px" || sliderG.style.left === "") {
        sliderG.style.left = "80%";
    } else {
        sliderG.style.left = "0";
    }
    document.querySelector(".slider-container1 ").classList.toggle("active");
});

document.querySelector(".slider-container2").addEventListener("click", function() {
    if (sliderN.style.left === "0px" || sliderN.style.left === "") {
        sliderN.style.left = "80%";
    } else {
        sliderN.style.left = "0";
    }
    document.querySelector(".slider-container2 ").classList.toggle("active");
});

function editElement(element) {
    const inputElement = element.querySelector('.inputHp');
    
    const baseValue = 50 + (10 * inputBaseValue.value);

    element.classList.add('editing');

    inputElement.style.display = 'inline-block';
    valueElement.style.display = 'none';
    inputElement.focus();

    inputElement.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            validateEdit(element, baseValue);
        }
    });

    inputElement.addEventListener('blur', function() {
        validateEdit(element, baseValue);
    });
}

function validateEdit(element, baseValue) {
    const inputElement = element.querySelector('.inputHp');
    const newValue = parseInt(inputElement.value) + baseValue;

    if (!isNaN(newValue)) {
        valueElement.textContent = newValue;
        if(valueElement.textContent !== baseValue){
          element.style.border = "1px solid green";  
        } 
    }

    element.classList.remove('editing');

    inputElement.style.display = 'none';
    valueElement.style.display = 'inline-block';
}

lvlInput.addEventListener("keyup", function(){
    let value = parseInt(lvlInput.value);
    if(value < 1 || isNaN(value)){
        value = 1;
    }
    if(value > 230){
        value = 230;
    }
    lvlInput.value = value;

    const newLvlValue = parseInt(inputBaseValue.value);
    const newHpValue = 50 + (10 * newLvlValue);

    valueElement.textContent = newHpValue;
});