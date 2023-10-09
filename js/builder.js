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

import { I18n } from "i18n-js";
import fr from "../lang/fr.json";
import en from "../lang/en.json";
import es from "../lang/es.json";
import pt from "../lang/pt.json";

const i18n = new I18n({
    ...fr,
    ...en,
    ...es,
    ...pt
});

load();

function load(){
    document.getElementById("buildName").innerHTML = i18n.t("buildName");
    document.getElementById("lvlLang").innerHTML = i18n.t("lvlLang");
    document.getElementById("guild").innerHTML = i18n.t("guild");
    document.getElementById("nation").innerHTML = i18n.t("nation");
    document.getElementById("hp").innerHTML = i18n.t("hp");
    document.getElementById("ap").innerHTML = i18n.t("ap");
    document.getElementById("wp").innerHTML = i18n.t("wp");
    document.getElementById("armor").innerHTML = i18n.t("armor");
    document.getElementById("mp").innerHTML = i18n.t("mp");
    document.getElementById("armorReceived").innerHTML = i18n.t("armorReceived");
    document.getElementById("armorGiven").innerHTML = i18n.t("armorGiven");
    document.getElementById("damageDealt").innerHTML = i18n.t("damageDealt");
    document.getElementById("critical").innerHTML = i18n.t("critical");
    document.getElementById("initiative").innerHTML = i18n.t("initiative");
    document.getElementById("dodge").innerHTML = i18n.t("dodge");
    document.getElementById("wisdom").innerHTML = i18n.t("wisdom");
    document.getElementById("control").innerHTML = i18n.t("control");
    document.getElementById("heals").innerHTML = i18n.t("heals");
    document.getElementById("block").innerHTML = i18n.t("block");
    document.getElementById("range").innerHTML = i18n.t("range");
    document.getElementById("lock").innerHTML = i18n.t("lock");
    document.getElementById("prospecting").innerHTML = i18n.t("prospecting");
    document.getElementById("will").innerHTML = i18n.t("will");
    document.getElementById("critMastery").innerHTML = i18n.t("critMastery");
    document.getElementById("rearMastery").innerHTML = i18n.t("rearMastery");
    document.getElementById("meleeMastery").innerHTML = i18n.t("meleeMastery");
    document.getElementById("healMastery").innerHTML = i18n.t("healMastery");
    document.getElementById("critResist").innerHTML = i18n.t("critResist");
    document.getElementById("rearResist").innerHTML = i18n.t("rearResist");
    document.getElementById("distanceMastery").innerHTML = i18n.t("distanceMastery");
    document.getElementById("berserkMastery").innerHTML = i18n.t("berserkMastery");
}

document.addEventListener("DOMContentLoaded", function () {
    
    var langDropdowns = document.querySelector(".lang-dropdown");
    var flag = langDropdowns.querySelector(".flag");
    var content = langDropdowns.querySelector(".dropdown-content");

    for (const dropdown of content.children) {
        dropdown.addEventListener("click", function(){
            flag.querySelector("img").src=dropdown.querySelector("img").src;
            i18n.locale = dropdown.getAttribute("data-lang");
            console.log(i18n.locale);
            load();
        });
    };
});