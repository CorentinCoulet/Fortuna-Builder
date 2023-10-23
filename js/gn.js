const valueHp = document.getElementById("valueHp");
const wisdomValue = document.querySelector(".wisdomValue");
const prospectingValue = document.querySelector(".prospectingValue");

let bonusGuilde = false;
let bonusHM = false;

function increaseGuilde(){
    const currentValueHp = parseInt(valueHp.textContent, 10);

    const valueResEau = document.querySelector(".resEau");
    const currentValueResEau = parseInt(valueResEau.textContent, 10);

    const valueResAir = document.querySelector(".resAir");
    const currentValueResAir = parseInt(valueResAir.textContent, 10);

    const valueResTerre = document.querySelector(".resTerre");
    const currentValueResTerre = parseInt(valueResTerre.textContent, 10);

    const valueResFeu = document.querySelector(".resFeu");
    const currentValueResFeu = parseInt(valueResFeu.textContent, 10);

    const valueDamagePercent = document.querySelector(".damagePercent");
    const currentValueDamagePercent = parseInt(valueDamagePercent.textContent, 10);

    const valueHealsPercent = document.querySelector(".healsPercent");
    const currentValueHealsPercent = parseInt(valueHealsPercent.textContent, 10);

    const dodgeValue = document.querySelector(".dodgeValue");
    const currentDodgeValue = parseInt(dodgeValue.textContent, 10);

    const lockValue = document.querySelector(".lockValue");
    const currentLockValue = parseInt(lockValue.textContent, 10);

    const initiativeValue = document.querySelector(".initiativeValue");
    const currentInitiativeValue = parseInt(initiativeValue.textContent, 10);

    const currentWisdomValue = parseInt(wisdomValue.textContent, 10);

    const currentProspectingValue = parseInt(prospectingValue.textContent, 10);

    if(bonusGuilde){
        const newValueHp = currentValueHp - 55;
        valueHp.textContent = newValueHp;

        const newValueResEau = currentValueResEau - 20;
        valueResEau.textContent = newValueResEau;

        const newValueResAir = currentValueResAir - 20;
        valueResAir.textContent = newValueResAir;

        const newValueResTerre = currentValueResTerre - 20;
        valueResTerre.textContent = newValueResTerre;

        const newValueResFeu = currentValueResFeu - 20;
        valueResFeu.textContent = newValueResFeu;

        const newValueDamagePercent = currentValueDamagePercent - 8;
        valueDamagePercent.textContent = newValueDamagePercent;

        const newValueHealsPercent = currentValueHealsPercent - 8;
        valueHealsPercent.textContent = newValueHealsPercent;

        const newDodgeValue = currentDodgeValue - 20;
        dodgeValue.textContent = newDodgeValue;

        const newLockValue = currentLockValue - 20;
        lockValue.textContent = newLockValue;

        const newInitiativeValue = currentInitiativeValue - 10;
        initiativeValue.textContent = newInitiativeValue;

        const newWisdomValue = currentWisdomValue - 10;
        wisdomValue.textContent = newWisdomValue;

        const newProspectingValue = currentProspectingValue - 10;
        prospectingValue.textContent = newProspectingValue;
    } else {
        const newValueHp = currentValueHp + 55;
        valueHp.textContent = newValueHp; 

        const newValueResEau = currentValueResEau + 20;
        valueResEau.textContent = newValueResEau;

        const newValueResAir = currentValueResAir + 20;
        valueResAir.textContent = newValueResAir;

        const newValueResTerre = currentValueResTerre + 20;
        valueResTerre.textContent = newValueResTerre;

        const newValueResFeu = currentValueResFeu + 20;
        valueResFeu.textContent = newValueResFeu;

        const newValueDamagePercent = currentValueDamagePercent + 8;
        valueDamagePercent.textContent = newValueDamagePercent;

        const newValueHealsPercent = currentValueHealsPercent + 8;
        valueHealsPercent.textContent = newValueHealsPercent;

        const newDodgeValue = currentDodgeValue + 20;
        dodgeValue.textContent = newDodgeValue;

        const newLockValue = currentLockValue + 20;
        lockValue.textContent = newLockValue;

        const newInitiativeValue = currentInitiativeValue + 10;
        initiativeValue.textContent = newInitiativeValue;

        const newWisdomValue = currentWisdomValue + 10;
        wisdomValue.textContent = newWisdomValue;

        const newProspectingValue = currentProspectingValue + 10;
        prospectingValue.textContent = newProspectingValue;
    }
    bonusGuilde = !bonusGuilde;
}

function increaseHM(){
    const currentValueHp = parseInt(valueHp.textContent, 10);
    const currentWisdomValue = parseInt(wisdomValue.textContent, 10);
    const currentProspectingValue = parseInt(prospectingValue.textContent, 10);
    
    if(bonusHM){
        const newValueHp = currentValueHp - 10;
        valueHp.textContent = newValueHp;

        const newWisdomValue = currentWisdomValue - 10;
        wisdomValue.textContent = newWisdomValue;

        const newProspectingValue = currentProspectingValue - 10;
        prospectingValue.textContent = newProspectingValue;
    } else {
        const newValueHp = currentValueHp + 10;
        valueHp.textContent = newValueHp;

        const newWisdomValue = currentWisdomValue + 10;
        wisdomValue.textContent = newWisdomValue;

        const newProspectingValue = currentProspectingValue + 10;
        prospectingValue.textContent = newProspectingValue;
    }
    bonusHM = !bonusHM;
}

document.querySelector(".slider-container1").addEventListener("click", increaseGuilde);
document.querySelector(".slider-container2").addEventListener("click", increaseHM);
