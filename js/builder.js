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

// window.editValue = function(element) {
//     const inputElement = document.createElement("input");
//     inputElement.type = "number";
//     inputElement.classList.add("statsGlobalesAjout");
//     let saisieUser;
//     inputElement.value = parseInt(element.textContent) || 0;
//     element.textContent = "";
//     element.appendChild(inputElement);
//     inputElement.focus();

//     inputElement.addEventListener("keydown", function(event) {
//         if (event.key === "Enter") {
//             const newValue = parseInt(inputElement.value) || 0;
//             saisieUser = newValue;
//             element.textContent = newValue;
//             console.log(saisieUser);
//             inputElement.remove();
//         }
//     });

//     inputElement.addEventListener("blur", function() {
//         const newValue = parseInt(inputElement.value) || 0;
//         element.textContent = newValue;
//         inputElement.remove();
//     });
// };

let userEnteredValue = 0;
let previousValue = 0;

window.editValue = function(element) {
    const inputElement = document.createElement("input");
    inputElement.type = "number";
    inputElement.classList.add("statsGlobalesAjout");

    previousValue = element.textContent - userEnteredValue;
    inputElement.value = userEnteredValue;
    element.textContent = ""; 

    element.appendChild(inputElement);
    inputElement.focus();

    inputElement.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            userEnteredValue = parseInt(inputElement.value) || 0;
            element.textContent = previousValue + userEnteredValue; 
            inputElement.remove();
        }
    });

    inputElement.addEventListener("blur", function() {
        userEnteredValue = parseInt(inputElement.value) || 0;
        element.textContent = previousValue + userEnteredValue; 
        inputElement.remove();
    });
};

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

document.addEventListener("DOMContentLoaded", function () {
    updateHpValue();
});

lvlInput.addEventListener("keyup", function () {
    updateHpValue();
});

function updateHpValue() {
    let value = parseInt(lvlInput.value);
    if (value < 1 || isNaN(value)) {
        value = 1;
    }
    if (value > 230) {
        value = 230;
    }
    lvlInput.value = value;

    const newLvlValue = value;
    const newHpValue = 50 + (10 * newLvlValue);

    valueElement.textContent = newHpValue;
}